## API Resources

### Exercise
**Attributes:**
- ID: Number (PK)
- name: String
- code_fragment: String

### Solution
**Attributes:**
- ID: Number (PK)
- exercise_ID: Number (FK)
- pupil_ID: Number (FK)

### Pupil
**Attributes:**
- ID: Number (PK)
- username: String
- password: String

### Expression
**Attributes:**
- ID: Number (PK)
- line: Number
- start_pos: Number
- end_pos: Number
- solution_ID: Number (FK)

### Arrow
**Attributes:**
- ID: Number (PK)
- start_row: Number
- end_row: Number
- annotation: Boolean
- solution_ID: Number (FK)

### Variable
**Attributes:**
- ID: Number (PK)
- name: String
- value: String
- step_ID: Number (FK)

### Step
**Attributes:**
- ID: Number (PK)
- number: Number
- input: String
- output: String
- expr_eval_canvas: Text
- arrow_ID: Number (FK)
- solution_ID: Number (FK)
