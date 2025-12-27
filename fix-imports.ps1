# Add .js extensions to all imports in course index files
$files = @(
    "src/data/courses/react/index.js",
    "src/data/courses/tailwind/index.js",
    "src/data/courses/jsEs6/index.js"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        # Add .js to imports that don't have it
        $content = $content -replace "from '\./([^']+)';", "from './$1.js';"
        # Fix double .js.js
        $content = $content -replace "\.js\.js';", ".js';"
        Set-Content $file -Value $content -NoNewline
        Write-Host "Fixed: $file"
    }
}
