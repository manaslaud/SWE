// TypeScript UML Representation of Rekindle Application

// User Class
class User {
    userID: number;
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    dateCreated: Date;
    lastLogin?: Date;

    constructor(userID: number, name: string, email: string, password: string, profilePicture?: string) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.dateCreated = new Date();
    }

    register(): void {}
    login(): void {}
    updateProfile(): void {}
}

// Journal Entry Class
class JournalEntry {
    entryID: number;
    userID: number;
    date: Date;
    content: string;
    emotionTags?: string;
    dateCreated: Date;
    lastModified?: Date;

    constructor(entryID: number, userID: number, content: string) {
        this.entryID = entryID;
        this.userID = userID;
        this.content = content;
        this.date = new Date();
        this.dateCreated = new Date();
    }

    createEntry(): void {}
    editEntry(): void {}
    deleteEntry(): void {}
}

// Emotion Analysis Class
class EmotionAnalysis {
    analysisID: number;
    entryID: number;
    detectedEmotion: string;
    confidenceScore: number;
    analysisDate: Date;

    constructor(analysisID: number, entryID: number, detectedEmotion: string, confidenceScore: number) {
        this.analysisID = analysisID;
        this.entryID = entryID;
        this.detectedEmotion = detectedEmotion;
        this.confidenceScore = confidenceScore;
        this.analysisDate = new Date();
    }

    analyzeText(): void {}
    storeAnalysis(): void {}
}

// Search Class
class Search {
    searchQuery: string;
    dateRange?: Date;

    constructor(searchQuery: string, dateRange?: Date) {
        this.searchQuery = searchQuery;
        this.dateRange = dateRange;
    }

    filterByEmotion(emotion: string): void {}
    executeSearch(): void {}
}

// Visualization Class
class Visualization {
    generateEmotionTrends(): void {}
    exportReport(): void {}
}

// Admin Class
class Admin {
    adminID: number;

    constructor(adminID: number) {
        this.adminID = adminID;
    }

    manageUsers(): void {}
    monitorSystemLogs(): void {}
}

// Relationships
interface UserActions {
    creates: JournalEntry[];
    performs: Search[];
    views: Visualization[];
}

interface AdminActions {
    manages: User[];
    monitors: JournalEntry[];
}