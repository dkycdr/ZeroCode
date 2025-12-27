import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ResponsiveTables = {
    id: 'html5-u5-doc-3-responsive',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Responsive Table Patterns',
    duration: '18 min read',
    content: `
# Deep Dive: Responsive Table Patterns

## The Mobile Problem

Tables are **rigid by nature**. They expect a fixed width grid where every column has enough space. On mobile screens (320px-480px), tables with 5+ columns become unreadable.

\`\`\`text
Desktop (1200px):
+--------+--------+--------+--------+--------+
| Name   | Email  | Phone  | City   | Action |
+--------+--------+--------+--------+--------+
| John   | j@mail | 555... | NYC    | Edit   |
+--------+--------+--------+--------+--------+

Mobile (320px):
+--+--+--+--+--+
|Na|Em|Ph|Ci|Ac|  ← Unreadable!
+--+--+--+--+--+
|Jo|j@|55|NY|Ed|
+--+--+--+--+--+
\`\`\`

This lesson teaches you **5 professional patterns** to handle this.

---

## Pattern 1: Horizontal Scroll Wrapper

**The simplest solution.** Wrap your table in a container that scrolls horizontally.

### HTML Structure
\`\`\`html
<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>555-1234</td>
                <td>New York</td>
                <td><button>Edit</button></td>
            </tr>
        </tbody>
    </table>
</div>
\`\`\`

### CSS
\`\`\`css
.table-wrapper {
    overflow-x: auto;           /* Enable horizontal scroll */
    -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
    max-width: 100%;
}

.table-wrapper table {
    min-width: 600px;           /* Force table to maintain width */
    width: 100%;
    border-collapse: collapse;
}
\`\`\`

### When to Use
- ✅ Data tables with many columns
- ✅ Financial/spreadsheet-like data
- ✅ When all columns are equally important

### Accessibility
Add \`tabindex="0"\` to the wrapper so keyboard users can scroll:
\`\`\`html
<div class="table-wrapper" tabindex="0" role="region" aria-label="Scrollable data table">
\`\`\`

---

## Pattern 2: Stacked Cards (Data-Label)

**Transform rows into cards on mobile.** Each cell displays its header as a label.

### HTML with Data Attributes
\`\`\`html
<table class="responsive-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Name">John Doe</td>
            <td data-label="Email">john@example.com</td>
            <td data-label="Phone">555-1234</td>
        </tr>
        <tr>
            <td data-label="Name">Jane Smith</td>
            <td data-label="Email">jane@example.com</td>
            <td data-label="Phone">555-5678</td>
        </tr>
    </tbody>
</table>
\`\`\`

### CSS Magic
\`\`\`css
/* Desktop: Normal table */
.responsive-table {
    width: 100%;
    border-collapse: collapse;
}

.responsive-table th,
.responsive-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
}

/* Mobile: Stack as cards */
@media (max-width: 768px) {
    .responsive-table thead {
        display: none;  /* Hide header row */
    }
    
    .responsive-table tr {
        display: block;
        margin-bottom: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 8px;
    }
    
    .responsive-table td {
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;
        border: none;
        border-bottom: 1px solid #eee;
    }
    
    .responsive-table td:last-child {
        border-bottom: none;
    }
    
    /* Show the label from data-label */
    .responsive-table td::before {
        content: attr(data-label);
        font-weight: 600;
        color: #666;
    }
}
\`\`\`

### Visual Result
\`\`\`text
Mobile View:
┌─────────────────────────┐
│ Name:     John Doe      │
│ Email:    john@exam...  │
│ Phone:    555-1234      │
└─────────────────────────┘
┌─────────────────────────┐
│ Name:     Jane Smith    │
│ Email:    jane@exam...  │
│ Phone:    555-5678      │
└─────────────────────────┘
\`\`\`

### When to Use
- ✅ User data, profiles, orders
- ✅ Tables with 3-6 columns
- ✅ When each row is a distinct "item"

---

## Pattern 3: Priority Columns (Hide Low-Priority)

**Hide less important columns on small screens.** Show only essential data.

### HTML with Priority Classes
\`\`\`html
<table class="priority-table">
    <thead>
        <tr>
            <th>Name</th>
            <th class="priority-2">Email</th>
            <th class="priority-3">Phone</th>
            <th class="priority-3">City</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td class="priority-2">john@example.com</td>
            <td class="priority-3">555-1234</td>
            <td class="priority-3">New York</td>
            <td><button>View</button></td>
        </tr>
    </tbody>
</table>
\`\`\`

### CSS
\`\`\`css
/* Tablet: Hide priority-3 */
@media (max-width: 900px) {
    .priority-3 {
        display: none;
    }
}

/* Mobile: Hide priority-2 and priority-3 */
@media (max-width: 600px) {
    .priority-2,
    .priority-3 {
        display: none;
    }
}
\`\`\`

### When to Use
- ✅ Admin dashboards
- ✅ Data with clear primary/secondary columns
- ✅ When some columns are "nice to have"

---

## Pattern 4: Flip Axis (Rows → Columns)

**Flip the table 90 degrees.** Headers become the first column, data becomes rows.

### CSS-Only Flip
\`\`\`css
@media (max-width: 600px) {
    .flip-table {
        display: block;
    }
    
    .flip-table thead {
        display: none;
    }
    
    .flip-table tbody,
    .flip-table tr,
    .flip-table td {
        display: block;
    }
    
    .flip-table tr {
        margin-bottom: 20px;
        border: 2px solid #333;
    }
    
    .flip-table td {
        display: flex;
        border-bottom: 1px solid #ddd;
    }
    
    .flip-table td::before {
        content: attr(data-label);
        width: 40%;
        font-weight: bold;
        background: #f5f5f5;
        padding: 8px;
    }
}
\`\`\`

### When to Use
- ✅ Comparison tables (Feature A vs Feature B)
- ✅ Specification tables
- ✅ Tables with few rows but many columns

---

## Pattern 5: Collapse/Expand (Accordion)

**Show summary row, expand for details.** Uses JavaScript for interactivity.

### HTML Structure
\`\`\`html
<table class="accordion-table">
    <thead>
        <tr>
            <th></th>
            <th>Order #</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr class="summary-row" data-target="details-1">
            <td><button class="expand-btn">+</button></td>
            <td>#12345</td>
            <td>$299.00</td>
            <td>Shipped</td>
        </tr>
        <tr class="details-row" id="details-1" hidden>
            <td colspan="4">
                <strong>Items:</strong> Widget x2, Gadget x1<br>
                <strong>Address:</strong> 123 Main St, NYC<br>
                <strong>Tracking:</strong> 1Z999...
            </td>
        </tr>
    </tbody>
</table>
\`\`\`

### JavaScript
\`\`\`javascript
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        const targetId = row.dataset.target;
        const detailsRow = document.getElementById(targetId);
        
        detailsRow.hidden = !detailsRow.hidden;
        btn.textContent = detailsRow.hidden ? '+' : '−';
    });
});
\`\`\`

### When to Use
- ✅ Order history
- ✅ Complex data with nested details
- ✅ Mobile-first designs

---

## Quick Reference: Choosing a Pattern

| Pattern | Best For | Complexity |
|:--------|:---------|:-----------|
| **Horizontal Scroll** | Data-heavy tables, spreadsheets | ⭐ Easy |
| **Stacked Cards** | User data, orders, profiles | ⭐⭐ Medium |
| **Priority Columns** | Admin tables with many columns | ⭐⭐ Medium |
| **Flip Axis** | Comparison/spec tables | ⭐⭐ Medium |
| **Accordion** | Nested data, order details | ⭐⭐⭐ Complex |

---

## Key Takeaways

1. **Never let tables break layout** - Always plan for mobile
2. **Horizontal scroll is the safest default** - Works for any table
3. **Data-label pattern is most elegant** - Best for user-facing data
4. **Hide low-priority columns** - Prioritize essential information
5. **Test on real devices** - Emulators don't show scroll issues

> [!TIP]
> Start with **Pattern 1 (Horizontal Scroll)** for any table. It's the safest fallback. Then upgrade to Pattern 2 (Stacked Cards) for user-facing data.
`
};
