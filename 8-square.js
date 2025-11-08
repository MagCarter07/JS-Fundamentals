const size = Number(process.argv[2]);

// If argument is not a valid number
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // If size is positive, print square
  if (size > 0) {
    // Build one row of X characters
    const row = "X".repeat(size);

    // Print row "size" times
    for (let i = 0; i < size; i++) {
      console.log(row);
    }
  }
  // If size <= 0, print nothing
}
