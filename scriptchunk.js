// fix-chunks.js
const fs = require('fs');
const path = require('path');

// Adjust this path to match your output directory
const distPath = path.join(__dirname, 'dist', 'angular19-test');

console.log(`Processing files in: ${distPath}`);

// Find all files
const files = fs.readdirSync(distPath);

// Find the chunk files
const chunkFiles = files.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

if (chunkFiles.length > 0) {
  console.log(`Found ${chunkFiles.length} chunk files: ${chunkFiles.join(', ')}`);
  
  // For each chunk file
  chunkFiles.forEach((chunkFile, index) => {
    // Create a consistent name based on index if there are multiple chunks
    const newName = chunkFiles.length === 1 ? 'vendor.js' : `vendor-${index + 1}.js`;
    
    // Rename the chunk file to a consistent name
    const newPath = path.join(distPath, newName);
    fs.renameSync(path.join(distPath, chunkFile), newPath);
    console.log(`Renamed ${chunkFile} to ${newName}`);
    
    // Get the chunk file name without extension for pattern matching
    const chunkNameWithoutExt = chunkFile.replace('.js', '');
    
    // Update the references in main.js
    const mainJsPath = path.join(distPath, 'main.js');
    if (fs.existsSync(mainJsPath)) {
      let content = fs.readFileSync(mainJsPath, 'utf8');
      
      // Check if main.js contains references to the chunk
      if (content.includes(chunkNameWithoutExt)) {
        // Replace all occurrences of the chunk filename
        const originalContent = content;
        
        // Handle different reference patterns
        content = content.replace(new RegExp(`"${chunkNameWithoutExt}"`, 'g'), `"${newName.replace('.js', '')}"`);
        content = content.replace(new RegExp(`"${chunkFile}"`, 'g'), `"${newName}"`);
        content = content.replace(new RegExp(`'${chunkNameWithoutExt}'`, 'g'), `'${newName.replace('.js', '')}'`);
        content = content.replace(new RegExp(`'${chunkFile}'`, 'g'), `'${newName}'`);
        content = content.replace(new RegExp(`\\/${chunkFile}`, 'g'), `\\/${newName}`);
        
        // Check if we made any replacements
        if (content !== originalContent) {
          fs.writeFileSync(mainJsPath, content);
          console.log(`Updated references in main.js`);
        }
      } else {
        console.log(`No references to ${chunkFile} found in main.js`);
      }
    } else {
      console.log('main.js not found');
    }
  });
  
  console.log('Process completed successfully!');
} else {
  console.log('No chunk files found. This could mean:');
  console.log('1. Your build is already optimized without chunks');
  console.log('2. The chunk files have a different naming pattern');
  console.log('3. The output directory path is incorrect');
}