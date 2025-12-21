#!/bin/bash
# Script to refactor a course file into folder structure
# Usage: ./refactor-course.sh <course-name> <course-file>

COURSE_NAME=$1
COURSE_FILE=$2
COURSES_DIR="src/data/courses"

if [ -z "$COURSE_NAME" ] || [ -z "$COURSE_FILE" ]; then
    echo "Usage: $0 <course-name> <course-file>"
    echo "Example: $0 git git.js"
    exit 1
fi

cd "$(dirname "$0")" || exit 1

# Create folder
mkdir -p "$COURSES_DIR/$COURSE_NAME"

# Find unit boundaries (lines with "// UNIT" comments)
echo "Finding unit boundaries in $COURSE_FILE..."
UNITS=$(grep -n "// UNIT" "$COURSES_DIR/$COURSE_FILE" | head -20)

if [ -z "$UNITS" ]; then
    echo "⚠️  No units found with '// UNIT' pattern"
    echo "Trying alternative pattern..."
    UNITS=$(grep -n "UNIT [0-9]" "$COURSES_DIR/$COURSE_FILE" | head -20)
fi

echo "Found units:"
echo "$UNITS"

echo ""
echo "📝 Manual extraction needed for $COURSE_NAME"
echo "   Please extract units manually from $COURSE_FILE"
echo "   Create unit files in $COURSES_DIR/$COURSE_NAME/"

