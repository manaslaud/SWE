
---

### **Use Case Template**
| **Use Case Name**    | Name of the use case |
|----------------------|---------------------|
| **Actors**          | The involved actors |
| **Description**     | Brief explanation of the use case |
| **Preconditions**   | Conditions that must be met before execution |
| **Postconditions**  | Conditions after the use case is executed |
| **Flow of Events**  | Step-by-step flow |
| **Exceptions**      | Alternative flows or error handling |

---

## **Use Case Descriptions**

### **1. Register**
| **Use Case Name**    | Register |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Allows a new user to register by entering credentials |
| **Preconditions**   | User is not already registered |
| **Postconditions**  | User account is created and stored in the database |
| **Flow of Events**  | 1. User navigates to the registration page <br> 2. User enters details (name, email, password) <br> 3. System validates input <br> 4. System sends verification email <br> 5. User confirms email <br> 6. System activates the account |
| **Exceptions**      | - If email is already registered, system notifies user <br> - If invalid email format, system prompts correction |

---

### **2. Login**
| **Use Case Name**    | Login |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Allows users to log into their accounts |
| **Preconditions**   | User has a registered account |
| **Postconditions**  | User is granted access to the dashboard |
| **Flow of Events**  | 1. User enters email and password <br> 2. System validates credentials <br> 3. If valid, user is redirected to dashboard |
| **Exceptions**      | - If incorrect password, user is prompted to retry <br> - If multiple failed attempts, account is locked temporarily <br> - If user forgets password, system allows reset (**Extend** relationship) |

---

### **3. Reset Password**
| **Use Case Name**    | Reset Password |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Allows users to reset their password |
| **Preconditions**   | User is registered but forgot the password |
| **Postconditions**  | Password is updated successfully |
| **Flow of Events**  | 1. User clicks "Forgot Password" <br> 2. System asks for email <br> 3. User enters email <br> 4. System sends reset link <br> 5. User enters new password <br> 6. System updates password |
| **Exceptions**      | - If email is not registered, system notifies the user |

---

### **4. Create Journal Entry**
| **Use Case Name**    | Create Journal Entry |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Allows users to write and save journal entries |
| **Preconditions**   | User must be logged in |
| **Postconditions**  | Journal entry is saved in the database |
| **Flow of Events**  | 1. User navigates to journal page <br> 2. User writes reflection <br> 3. User submits entry <br> 4. System stores entry <br> 5. System triggers **Emotion Analysis** (**Include**) |
| **Exceptions**      | - If system fails to save entry, user is notified |

---

### **5. Analyze Emotions**
| **Use Case Name**    | Analyze Emotions |
|----------------------|---------------------|
| **Actors**          | System |
| **Description**     | Automatically analyzes journal text for emotions |
| **Preconditions**   | User has saved a journal entry |
| **Postconditions**  | Emotions are detected and tagged |
| **Flow of Events**  | 1. System extracts journal text <br> 2. System processes text through the AI model <br> 3. System detects emotions <br> 4. System tags emotions (**Include**) <br> 5. System stores analysis results (**Include**) |
| **Exceptions**      | - If AI model fails, default response is saved |

---

### **6. Search Journal**
| **Use Case Name**    | Search Journal |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Users can search for past journal entries |
| **Preconditions**   | User has at least one journal entry |
| **Postconditions**  | Search results are displayed |
| **Flow of Events**  | 1. User enters search query <br> 2. System searches journal database <br> 3. System displays results <br> 4. User can apply **filters** (**Extend**) |
| **Exceptions**      | - If no results found, user is notified |

---

### **7. Generate Emotion Trends**
| **Use Case Name**    | Generate Emotion Trends |
|----------------------|---------------------|
| **Actors**          | User |
| **Description**     | Users can visualize their emotion patterns over time |
| **Preconditions**   | User has multiple journal entries with emotion analysis |
| **Postconditions**  | Emotion trends are displayed as graphs |
| **Flow of Events**  | 1. User selects time period <br> 2. System retrieves emotion data <br> 3. System generates visualization <br> 4. User can choose to **Export Reports** (**Extend**) |
| **Exceptions**      | - If no journal entries exist, system notifies the user |

---

### **8. Manage Users (Admin)**
| **Use Case Name**    | Manage Users |
|----------------------|---------------------|
| **Actors**          | Admin |
| **Description**     | Admin can manage user accounts |
| **Preconditions**   | Admin must be logged in |
| **Postconditions**  | User records are updated |
| **Flow of Events**  | 1. Admin selects user <br> 2. Admin modifies details (block, delete, update) <br> 3. System updates user records |
| **Exceptions**      | - If unauthorized access, system denies action |

---

### **9. Monitor System Logs (Admin)**
| **Use Case Name**    | Monitor System Logs |
|----------------------|---------------------|
| **Actors**          | Admin |
| **Description**     | Admin can monitor system activities and logs |
| **Preconditions**   | Admin must be logged in |
| **Postconditions**  | Logs are displayed |
| **Flow of Events**  | 1. Admin navigates to logs section <br> 2. System retrieves logs <br> 3. Admin reviews logs |
| **Exceptions**      | - If logs are unavailable, admin is notified |

---

## **Final Notes:**
- **Include (<<include>>)** is used when a use case is **always required** as part of another use case.  
  - Example: `Analyze Emotions` is **included** in `Create Journal Entry`.
- **Extend (<<extend>>)** is used when a use case is **optional or conditional**.  
  - Example: `Reset Password` **extends** `Login` (only triggered when login fails).
  - `Filter Results` **extends** `Search Journal` (optional filter).

