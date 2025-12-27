import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6BankAccount = {
    id: 'python-u7-lab-6-bank',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Build a Bank Account System',
    duration: '30 min',
    content: `
# Lab: Build a Bank Account System

## The Scenario

You are building a **Banking System** with different account types. Each account type has different interest rates and withdrawal limits.

## Class Hierarchy

\`\`\`text
        ┌─────────────────────┐
        │    BankAccount      │
        │  - _balance (private)│
        │  - account_number   │
        │  + deposit()        │
        │  + withdraw()       │
        │  + balance (property)│
        └──────────┬──────────┘
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
┌──────────┐ ┌──────────────┐ ┌──────────────┐
│ Savings  │ │  Checking    │ │   Business   │
│ +interest│ │ +overdraft   │ │ +limit       │
│ +apply() │ │ +withdraw()  │ │ +withdraw()  │
└──────────┘ └──────────────┘ └──────────────┘
\`\`\`

## Requirements

1. Create \`BankAccount\` with encapsulated balance
2. Use @property for balance (read-only)
3. Validate deposits and withdrawals
4. Create \`SavingsAccount\` with interest rate
5. Create \`CheckingAccount\` with overdraft protection

## Key Patterns

### Property for Protected Attribute
\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Protected
    
    @property
    def balance(self):
        return self._balance
\`\`\`

### Validated Withdrawal
\`\`\`python
def withdraw(self, amount):
    if amount > self._balance:
        raise ValueError("Insufficient funds")
    self._balance -= amount
\`\`\`
`,
    tasks: [
        {
            id: 1,
            description: 'Create BankAccount with __init__(self, account_number, balance=0) using self._balance (protected)',
            completed: false,
            regex: /class\s+BankAccount\s*:[\s\S]*def\s+__init__[\s\S]*self\._balance\s*=\s*balance/,
            hint: {
                concept: 'Protected Attribute',
                strategy: 'Use _balance (underscore prefix) for encapsulation',
                solution: 'self._balance = balance'
            }
        },
        {
            id: 2,
            description: 'Add @property balance that returns self._balance (read-only)',
            completed: false,
            regex: /@property[\s\S]*def\s+balance\s*\(\s*self\s*\)[\s\S]*return\s+self\._balance/,
            hint: {
                concept: 'Property Getter',
                strategy: 'Use @property decorator for read-only access',
                solution: '@property\\n    def balance(self):\\n        return self._balance'
            }
        },
        {
            id: 3,
            description: 'Add deposit(self, amount) that validates amount > 0 before adding to balance',
            completed: false,
            regex: /def\s+deposit\s*\(\s*self\s*,\s*amount\s*\)[\s\S]*(if|raise|amount\s*>\s*0)[\s\S]*self\._balance\s*\+=\s*amount/,
            hint: {
                concept: 'Validation',
                strategy: 'Check if amount is positive before depositing',
                solution: 'if amount > 0:\\n            self._balance += amount'
            }
        },
        {
            id: 4,
            description: 'Add withdraw(self, amount) that raises ValueError if amount > balance',
            completed: false,
            regex: /def\s+withdraw\s*\(\s*self\s*,\s*amount\s*\)[\s\S]*raise\s+ValueError/,
            hint: {
                concept: 'Error Handling',
                strategy: 'Raise error for insufficient funds',
                solution: 'if amount > self._balance:\\n            raise ValueError("Insufficient funds")'
            }
        },
        {
            id: 5,
            description: 'Create SavingsAccount(BankAccount) with interest_rate attribute',
            completed: false,
            regex: /class\s+SavingsAccount\s*\(\s*BankAccount\s*\)[\s\S]*interest_rate/,
            hint: {
                concept: 'Inheritance',
                strategy: 'Inherit from BankAccount and add interest_rate',
                solution: 'class SavingsAccount(BankAccount):'
            }
        },
        {
            id: 6,
            description: 'SavingsAccount.apply_interest() should add interest to balance',
            completed: false,
            regex: /def\s+apply_interest\s*\(\s*self\s*\)[\s\S]*self\._balance\s*\*=|self\._balance\s*\+=[\s\S]*interest/i,
            hint: {
                concept: 'Interest Calculation',
                strategy: 'Multiply balance by (1 + interest_rate)',
                solution: 'self._balance *= (1 + self.interest_rate)'
            }
        }
    ],
    files: [
        {
            name: 'banking.py',
            language: 'python',
            content: `# ╔══════════════════════════════════════════════════════════════════╗
# ║  BANKING SYSTEM - OOP Lab with Encapsulation                      ║
# ║  Practice properties, validation, and inheritance                 ║
# ╚══════════════════════════════════════════════════════════════════╝

# ═══════════════════════════════════════════════════════════════════
# TASK 1-4: Create the BankAccount base class
# ═══════════════════════════════════════════════════════════════════
class BankAccount:
    """Base bank account with encapsulated balance"""
    
    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        # TODO TASK 1: Set self._balance (protected attribute)
        self._balance = 0  # Fix this!
    
    # TODO TASK 2: Add @property for balance
    @property
    def balance(self):
        # Return the protected _balance
        pass
    
    # TODO TASK 3: Implement deposit with validation
    def deposit(self, amount):
        """Deposit money into account"""
        # Validate: amount must be positive
        # Add to balance
        pass
    
    # TODO TASK 4: Implement withdraw with error handling
    def withdraw(self, amount):
        """Withdraw money from account"""
        # Validate: amount must not exceed balance
        # Raise ValueError if insufficient funds
        # Subtract from balance
        pass
    
    def __str__(self):
        return "Account " + self.account_number + ": $" + str(self._balance)


# ═══════════════════════════════════════════════════════════════════
# TASK 5-6: Create the SavingsAccount class
# ═══════════════════════════════════════════════════════════════════
class SavingsAccount:  # TODO: Add (BankAccount)
    """Savings account with interest rate"""
    
    def __init__(self, account_number, balance=0, interest_rate=0.02):
        # TODO: Call super().__init__()
        # TODO: Set self.interest_rate
        pass
    
    # TODO TASK 6: Implement apply_interest
    def apply_interest(self):
        """Add interest to the balance"""
        # Calculate: new_balance = balance * (1 + interest_rate)
        # Or: interest = balance * interest_rate, then add it
        pass


# ═══════════════════════════════════════════════════════════════════
# BONUS: Create CheckingAccount with overdraft protection
# ═══════════════════════════════════════════════════════════════════
class CheckingAccount:  # TODO: Add (BankAccount)
    """Checking account with overdraft limit"""
    
    def __init__(self, account_number, balance=0, overdraft_limit=100):
        # TODO: Call super().__init__()
        # TODO: Set self.overdraft_limit
        pass
    
    def withdraw(self, amount):
        """Override: Allow overdraft up to limit"""
        # Can withdraw up to balance + overdraft_limit
        # Example: balance=50, limit=100 -> can withdraw up to $150
        pass


# ═══════════════════════════════════════════════════════════════════
# TEST YOUR CODE
# ═══════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    # Test BankAccount
    print("=== Basic Account ===")
    acc = BankAccount("ACC001", 100)
    print("Initial:", acc)
    acc.deposit(50)
    print("After deposit $50:", acc)
    acc.withdraw(30)
    print("After withdraw $30:", acc)
    
    try:
        acc.withdraw(500)  # Should raise error
    except ValueError as e:
        print("Error:", e)
    
    print()
    
    # Test SavingsAccount
    print("=== Savings Account ===")
    savings = SavingsAccount("SAV001", 1000, interest_rate=0.05)
    print("Initial:", savings)
    savings.apply_interest()
    print("After interest:", savings)  # Should be $1050
    
    print()
    
    # Test CheckingAccount
    print("=== Checking Account ===")
    checking = CheckingAccount("CHK001", 50, overdraft_limit=100)
    print("Initial:", checking)
    checking.withdraw(100)  # Uses overdraft
    print("After withdraw $100:", checking)  # Balance: -$50
`
        }
    ]
};
