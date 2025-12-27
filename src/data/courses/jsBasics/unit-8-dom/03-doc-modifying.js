import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Modifying = {
    id: 'js-u8-doc-3-modifying',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Modifying Content & Styles',
    duration: '12 min read',
    content: `
# Modifying Content & Styles

## 1. Changing Text

\`\`\`javascript
const title = document.querySelector("h1");

title.textContent = "New Title";  // Plain text
title.innerHTML = "<em>New</em> Title";  // HTML allowed
\`\`\`

---

## 2. Changing Attributes

\`\`\`javascript
const img = document.querySelector("img");

img.src = "new-image.jpg";
img.alt = "Description";
img.setAttribute("data-id", "123");
img.getAttribute("src");
\`\`\`

---

## 3. Changing Styles

\`\`\`javascript
const box = document.querySelector(".box");

box.style.backgroundColor = "blue";
box.style.fontSize = "24px";
box.style.display = "none";
\`\`\`

> [!NOTE]
> CSS properties with hyphens become camelCase: \`background-color\` → \`backgroundColor\`

---

## 4. Managing Classes

\`\`\`javascript
const element = document.querySelector(".card");

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
element.classList.contains("active");  // true/false
\`\`\`

---

## 5. Creating Elements

\`\`\`javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
newDiv.classList.add("new-item");

document.body.appendChild(newDiv);
\`\`\`

---

## 6. Removing Elements

\`\`\`javascript
const element = document.querySelector(".to-remove");
element.remove();
\`\`\`
`
};
