import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1FormAnatomy = {
    id: 'html5-u3-doc-1-anatomy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Anatomy of a Form',
    duration: '15 min read',
    content: `
# Deep Dive: The Anatomy of a Form 📝

Forms are the **gateway** between your users and your server. Every login, signup, checkout, and search uses forms.

## 1. How Forms Work

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    
    User->>Browser: Fills out form
    User->>Browser: Clicks Submit
    Browser->>Server: Sends form data (POST/GET)
    Server->>Server: Processes data
    Server->>Browser: Returns response
    Browser->>User: Shows result
\`\`\`

---

## 2. The Container (\`<form>\`)

Think of the \`<form>\` tag as a **digital envelope**.
You put data inside it, seal it, and mail it to a server.

\`\`\`mermaid
graph LR
    subgraph "📧 The Form Envelope"
        A["<form>"] --> B["inputs, labels, buttons"]
        B --> C["</form>"]
    end
    
    C --> D["📤 POST to /api/login"]
    
    style A fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#22c55e,color:#fff
\`\`\`

\`\`\`html
<form action="/api/login" method="POST">
    <!-- Inputs go here -->
</form>
\`\`\`

### Attributes:
| Attribute | Purpose | Example |
|-----------|---------|---------|
| **action** | Destination URL | \`/api/login\`, \`/search\` |
| **method** | How to send data | \`GET\` or \`POST\` |
| **enctype** | Data encoding | \`multipart/form-data\` for files |

### GET vs POST

\`\`\`mermaid
graph TB
    subgraph "🔓 GET Method"
        G1["Data visible in URL"]
        G2["google.com?q=cats"]
        G3["✅ Search, Filters"]
        G4["❌ Never for passwords!"]
    end
    
    subgraph "🔒 POST Method"
        P1["Data hidden in body"]
        P2["Not visible in URL"]
        P3["✅ Login, Signup, Checkout"]
        P4["✅ Sensitive data"]
    end
    
    style G1 fill:#fbbf24,color:#000
    style P1 fill:#22c55e,color:#fff
\`\`\`

> [!WARNING]
> **NEVER use GET for passwords or sensitive data!** It will appear in browser history, server logs, and can be seen by anyone.

---

## 3. The Input (\`<input>\`)

The most versatile tag in HTML. It changes shape based on the \`type\` attribute.

\`\`\`mermaid
graph TB
    INPUT["<input type='?'>"]
    
    INPUT --> TEXT["type='text'<br/>📝 Regular text box"]
    INPUT --> PASSWORD["type='password'<br/>🔒 Hidden dots ••••"]
    INPUT --> EMAIL["type='email'<br/>📧 Email validation"]
    INPUT --> NUMBER["type='number'<br/>🔢 Numeric input"]
    INPUT --> CHECKBOX["type='checkbox'<br/>☑️ Multiple selection"]
    INPUT --> RADIO["type='radio'<br/>🔘 Single selection"]
    INPUT --> FILE["type='file'<br/>📁 File upload"]
    INPUT --> DATE["type='date'<br/>📅 Date picker"]
    
    style INPUT fill:#E44D26,color:#fff
    style PASSWORD fill:#22c55e,color:#fff
    style EMAIL fill:#3b82f6,color:#fff
\`\`\`

\`\`\`html
<input type="text">      <!-- Regular box -->
<input type="password">  <!-- Dots •••• -->
<input type="email">     <!-- Email validation -->
<input type="checkbox">  <!-- Tick box -->
<input type="radio">     <!-- Round button -->
<input type="number">    <!-- Only numbers -->
<input type="date">      <!-- Calendar picker -->
<input type="file">      <!-- File upload -->
\`\`\`

---

## 4. The Label (\`<label>\`)

**CRITICAL RULE**: Every input MUST have a label.
Clicking the label should focus the input.

### The "For-Id" Connection

\`\`\`mermaid
graph LR
    LABEL["<label for='username'>"] --> |"connected via for/id"| INPUT["<input id='username'>"]
    
    style LABEL fill:#8b5cf6,color:#fff
    style INPUT fill:#3b82f6,color:#fff
\`\`\`

\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
\`\`\`

> [!IMPORTANT]
> The \`for\` attribute on label MUST match the \`id\` attribute on input. This is critical for:
> - **Accessibility**: Screen readers announce the label
> - **UX**: Clicking label focuses the input
> - **Touch**: Larger tap target on mobile

---

## 5. Complete Form Example

\`\`\`html
<form action="/api/login" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <button type="submit">Login</button>
</form>
\`\`\`

---

## 6. Key Takeaways

1. **Forms are envelopes** - they wrap data and send it to servers
2. **Use POST for sensitive data** - GET exposes data in URL
3. **Every input needs a label** - for accessibility and UX
4. **Connect with for/id** - label's \`for\` matches input's \`id\`
5. **Input type matters** - use the right type for validation and mobile keyboards
`
};
