# API Resources

## Resources

### Exercise
**Attributes:**
- ID: Number (PK)
- code_fragment: String

### Task
**Attributes:**
- ID: Number (PK)
- exercise_ID: Number (FK)
- number: Integer
- description: String
- hint: String

### Solution
**Attributes:**
- ID: Number (PK)
- exercise_ID: Number (FK)
- output: String
- input: String

### Submission
**Attributes:**
- ID: Number (PK)
- exercise_ID: Number (FK)
- pupil_ID: Number (FK)
- output: String
- input: String

### Expression
**Attributes:**
- ID: Number (PK)
- start_position: Number
- end_position: Number
- solution_ID: Number (FK)
- submission_ID: Number (FK)

### Arrow
**Attributes:**
- ID: Number (PK)
- start_row: Number
- end_row: Number
- order_num: Number
- solution_ID: Number (FK)
- submission_ID: Number (FK)

### Variable
**Attributes:**
- ID: Number (PK)
- name: String
- arrow_ID: Number (FK)
- value: String
- solution_ID: Number (FK)
- submission_ID: Number (FK)

### Pupil
**Attributes:**
- ID: Number (PK)
- password: String
