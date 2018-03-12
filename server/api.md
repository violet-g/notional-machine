# API Resources

- all resources share same methods
- CRUD (Create Read Update Delete) for all resources

// create
POST /<resource>

// read
GET /<resource>
GET /<resource>/<id>

// update
PUT /<resource>/<id>

// delete
DELETE /<resource>/<id>

- All methods return HTTP code 200

## Resources

### Exercise
**Attributes:**
- ID: Number (PK)
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
- start_pos: Number
- end_pos: Number
- solution_ID: Number (FK)

### Arrow
**Attributes:**
- ID: Number (PK)
- start_row: Number
- end_row: Number
- annotation: boolean
- solution_ID: Number (FK)
- step_ID: Number (FK)

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
- expr_eval_canvas: file
- solution_ID: Number (FK)
