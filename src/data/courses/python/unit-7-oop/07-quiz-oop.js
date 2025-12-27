import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz7Oop = {
    id: 'python-u7-quiz-oop',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: OOP Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the purpose of the __init__ method in a class?',
            options: [
                'To delete an object',
                'To initialize object attributes when creating an instance',
                'To print object information',
                'To inherit from another class'
            ],
            correctIndex: 1,
            explanation: '__init__ is the constructor method that runs automatically when you create an object. It sets up the initial state (attributes) of the instance.'
        },
        {
            id: 'q2',
            question: 'What does "self" refer to in a class method?',
            options: [
                'The class itself',
                'The parent class',
                'The current instance of the object',
                'A Python keyword for loops'
            ],
            correctIndex: 2,
            explanation: '"self" refers to the current instance of the class. When you call buddy.bark(), Python passes "buddy" as "self" automatically.'
        },
        {
            id: 'q3',
            question: 'What is the correct way to inherit from a parent class?',
            options: [
                'class Dog inherits Animal:',
                'class Dog(Animal):',
                'class Dog extends Animal:',
                'class Dog <- Animal:'
            ],
            correctIndex: 1,
            explanation: 'In Python, you inherit by putting the parent class name in parentheses: class Dog(Animal): This makes Dog a child class of Animal.'
        },
        {
            id: 'q4',
            question: 'What does super().__init__() do?',
            options: [
                'Creates a new superclass',
                'Deletes the parent class',
                'Calls the parent class constructor',
                'Overrides all parent methods'
            ],
            correctIndex: 2,
            explanation: 'super().__init__() calls the parent class\'s constructor, allowing you to initialize inherited attributes before adding child-specific ones.'
        },
        {
            id: 'q5',
            question: 'What naming convention indicates a "protected" attribute in Python?',
            options: [
                'UPPERCASE_NAME',
                '_single_underscore',
                '__double_underscore',
                'camelCase'
            ],
            correctIndex: 1,
            explanation: 'A single underscore prefix (_name) is a convention meaning "protected" - you can access it but shouldn\'t from outside the class. It\'s not enforced by Python.'
        },
        {
            id: 'q6',
            question: 'What is the purpose of the @property decorator?',
            options: [
                'To make a method private',
                'To allow attribute-like access to a method',
                'To create a static method',
                'To delete an attribute'
            ],
            correctIndex: 1,
            explanation: '@property lets you access a method like an attribute (obj.value instead of obj.value()). It\'s commonly used for read-only computed properties or to add validation.'
        },
        {
            id: 'q7',
            question: 'What is polymorphism?',
            options: [
                'Having multiple classes in one file',
                'Using the same method name with different implementations across classes',
                'Inheriting from multiple parent classes',
                'Creating private attributes'
            ],
            correctIndex: 1,
            explanation: 'Polymorphism means "many forms". Different classes can have methods with the same name but different implementations. For example, dog.speak() returns "Woof!" while cat.speak() returns "Meow!"'
        },
        {
            id: 'q8',
            question: 'What is the difference between a class attribute and an instance attribute?',
            options: [
                'Class attributes are faster',
                'Instance attributes are shared by all objects',
                'Class attributes are shared by all instances, instance attributes are unique to each object',
                'There is no difference'
            ],
            correctIndex: 2,
            explanation: 'Class attributes (defined outside __init__) are shared across all instances. Instance attributes (defined with self. in __init__) are unique to each object.'
        }
    ]
};
