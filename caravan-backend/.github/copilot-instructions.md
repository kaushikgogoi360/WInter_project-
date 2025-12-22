# Caravan Backend AI Instructions

## Architecture Overview
This is an Express.js backend for a complaint management system ("Caravan Chronicle") using MongoDB with Mongoose. Key components:
- **Authentication**: JWT-based with role-based access (user, staff, admin)
- **Complaints**: User-submitted issues with location, images, and status tracking
- **File Uploads**: Multer handles image uploads to `/uploads` directory
- **Roles**: Users register as "user"; admins create "staff"; admin account via `createAdmin.js`

## Key Patterns
- **Controllers**: Business logic in `/controllers`, imported by routes
- **Middleware**: `authMiddleware` verifies JWT and sets `req.user = {id, role}`; `isAdmin` checks role
- **Models**: Mongoose schemas in `/models` with refs (e.g., Complaint.userId -> User)
- **Routes**: RESTful endpoints under `/api/auth` and `/api/complaints`
- **File Handling**: Images stored as paths in DB, served statically from `/uploads`

## Developer Workflows
- **Start Server**: `npm start` (runs `node server.js`)
- **Environment**: Set `MONGO_URI`, `JWT_SECRET`, `PORT` in `.env`
- **Create Admin**: Run `node createAdmin.js` once for initial admin (aman123@gmail.com / admin123)
- **Testing**: Use Postman collection (`postman.json`) for API testing

## Conventions
- **Passwords**: Always hash with `bcrypt.hash(password, 10)` before saving
- **JWT Payload**: Include `{id, role}` in token
- **Complaint Creation**: Parse location as JSON from req.body, images from req.files
- **Status Updates**: Enum values: "OPEN", "IN_PROGRESS", "RESOLVED"
- **Error Handling**: Return JSON with `msg` or `error` fields, status codes 400/500

## Examples
- Auth route: `router.post("/register", register)` with no middleware
- Protected route: `router.post("/", auth, upload.array("images", 5), createComplaint)`
- Model ref: `userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }`