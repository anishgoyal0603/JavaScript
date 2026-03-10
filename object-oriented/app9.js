class User {
    login() {
        // ⚠️ No keyword used!
        // In a normal function, this creates 'window.status'.
        // In a CLASS, this is an ERROR.
        status = "Online"; 
    }
}

const u1 = new User();
u1.login(); 
// ❌ ReferenceError: status is not defined