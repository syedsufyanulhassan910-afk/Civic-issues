<?php
require "db.php";

function e($value) {
    return htmlspecialchars(
        (string)$value,
        ENT_QUOTES,
        "UTF-8"
    );
}

$errors = [];
$name = "";
$email = "";
$course = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $course = trim($_POST["course"] ?? "");

    if ($name === "" || strlen($name) > 100) {
        $errors[] = "Name is required (max 100 characters).";
    }

    if (
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        strlen($email) > 150
    ) {
        $errors[] = "Enter a valid email address.";
    }

    if ($course === "" || strlen($course) > 100) {
        $errors[] = "Course is required (max 100 characters).";
    }

    if (!$errors) {
        $stmt = $pdo->prepare(
            "INSERT INTO students (name, email, course)
             VALUES (:name, :email, :course)"
        );

        $stmt->execute([
            "name" => $name,
            "email" => $email,
            "course" => $course
        ]);

        header("Location: index.php?added=1");
        exit;
    }
}

$stmt = $pdo->query(
    "SELECT * FROM students ORDER BY id DESC"
);
$students = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en" data-oldweb="fluent">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <link rel="stylesheet" href="https://chabdulwahhab.github.io/OldwebUI/dist/oldweb-all.css">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

<div class="container">
    <header class="page-header">
        <h1>Student Management System</h1>
        <p>Manage student records in one place.</p>
    </header>

    <?php if (isset($_GET["added"])): ?>
        <p class="r-alert r-alert-ok">Student added successfully!</p>
    <?php endif; ?>

    <?php if (isset($_GET["updated"])): ?>
        <p class="r-aler">Student updated successfully!</p>
    <?php endif; ?>

    <?php if (isset($_GET["deleted"])): ?>
        <p class="r-alert r-alert-err">Student deleted successfully!</p>
    <?php endif; ?>

    <?php foreach ($errors as $error): ?>
        <p class="r-alert r-alert-err"><?= e($error) ?></p>
    <?php endforeach; ?>

    <section class="card">
        <h2>Add New Student</h2>

        <form method="POST" action="index.php">
            <div class="r-field">
                <label for="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    maxlength="100"
                    class="r-input-block"
                    value="<?= e($name) ?>"
                    required
                >
            </div>

            <div class="r-field">
                <label for="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    maxlength="150"
                    class="r-input-block"
                    value="<?= e($email) ?>"
                    required
                >
            </div>

            <div class="r-field">
                <label for="course">Course</label>
                <input
                    type="text"
                    id="course"
                    name="course"
                    maxlength="100"
                    class="r-input-block"
                    value="<?= e($course) ?>"
                    required
                >
            </div>

            <button type="submit" class="r-btn-block r-btn-primary">
                Add Student
            </button>
        </form>
    </section>

    <section class="card">
        <h2>Student Records</h2>

        <div class="r-full">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <?php if (!$students): ?>
                    <tr>
                        <td colspan="5" class="empty">
                            No students found. Add your first student!
                        </td>
                    </tr>
                <?php else: ?>
                    <?php foreach ($students as $student): ?>
                        <tr>
                            <td><?= e($student["id"]) ?></td>
                            <td><?= e($student["name"]) ?></td>
                            <td><?= e($student["email"]) ?></td>
                            <td><?= e($student["course"]) ?></td>
                            <td class="actions">
                                <a
                                    class="btn btn-edit"
                                    href="edit.php?id=<?= e($student["id"]) ?>"
                                >Edit</a>

                                <form
                                    method="POST"
                                    action="delete.php"
                                    class="inline-form delete-form"
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value="<?= e($student["id"]) ?>"
                                    >
                                    <button
                                        type="submit"
                                        class="btn btn-delete"
                                    >Delete</button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
                </tbody>
            </table>
        </div>
    </section>
</div>

</body>
</html>