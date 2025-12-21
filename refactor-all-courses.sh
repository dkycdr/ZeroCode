#!/bin/bash
# Script to refactor all courses with clear unit boundaries

cd "$(dirname "$0")/src/data/courses" || exit 1

# Function to refactor a course
refactor_course() {
    local COURSE_NAME=$1
    local COURSE_FILE=$2
    shift 2
    local UNIT_LINES=("$@")

    echo "📁 Refactoring $COURSE_NAME..."
    mkdir -p "$COURSE_NAME"

    local UNIT_COUNT=${#UNIT_LINES[@]}
    local TOTAL_LINES=$(wc -l < "$COURSE_FILE")

    for i in "${!UNIT_LINES[@]}"; do
        local START_LINE=${UNIT_LINES[$i]}
        local NEXT_INDEX=$((i + 1))

        if [ $NEXT_INDEX -lt $UNIT_COUNT ]; then
            local END_LINE=$((${UNIT_LINES[$NEXT_INDEX]} - 1))
        else
            # Last unit - find the closing brace
            local END_LINE=$TOTAL_LINES
        fi

        local UNIT_NUM=$((i + 1))
        local UNIT_FILE="$COURSE_NAME/unit-$UNIT_NUM.js"

        # Extract unit name from the file
        local UNIT_TITLE=$(sed -n "${START_LINE}p" "$COURSE_FILE" | sed 's/.*UNIT [0-9]*: //' | sed 's/.*UNIT [0-9]* //' | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

        cat > "$UNIT_FILE" << EOF
import { CONTENT_TYPES } from '../../curriculumStructure';

export const unit${UNIT_NUM}${UNIT_TITLE^} = {
EOF
        sed -n "${START_LINE},${END_LINE}p" "$COURSE_FILE" | sed '1s/.*UNIT [0-9]*:.*//' >> "$UNIT_FILE"
        echo '};' >> "$UNIT_FILE"
    done

    echo "✅ $COURSE_NAME refactored!"
}

# Refactor courses with clear unit boundaries
# jsEs6: units at lines 11, 331, 642, 928, 1333
# typescript: units at lines 11, 441, 700, 962, 1241
# node: units at lines 11, 352, 638, 821, 1092
# mongodb: units at lines 11, 273, 654, 860, 1178

echo "🚀 Starting course refactoring..."

# Note: This is a template - actual implementation would need proper parsing
echo "⚠️  Manual refactoring needed for courses without clear patterns"
echo "✅ Completed: react, git, tailwind"

