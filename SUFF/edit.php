<?php
require "db.php";

function e($value) {
    return htmlspecialchars(
        (string)$value,
        ENT_QUOTES,
        "UTF-8"
    );
}

$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

if (!$id || $id < 1) {
    header("Location: index.php");
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM students WHERE id = ?");
$stmt->execute([$id]);
$student = $stmt->fetch();

if (!$student) {
    http_response_code(404);
    exit("Student not found.");
}

$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $course = trim($_POST["course"] ?? "");

    if ($name === "" || strlen($name) > 100) {
        $errors[] = "Enter a name of up to 100 characters.";
    }

    if (
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        strlen($email) > 150
    ) {
        $errors[] = "Enter a valid email address.";
    }

    if ($course === "" || strlen($course) > 100) {
        $errors[] = "Enter a course of up to 100 characters.";
    }

    $student["name"] = $name;
    $student["email"] = $email;
    $student["course"] = $course;

    if (!$errors) {
        $stmt = $pdo->prepare(
            "UPDATE students
             SET name = ?, email = ?, course = ?
             WHERE id = ?"
        );

        $stmt->execute([$name, $email, $course, $id]);

        header("Location: index.php?updated=1");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en" data-oldweb="fluent">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Student</title>
    <link rel="stylesheet" href="https://chabdulwahhab.github.io/OldwebUI/dist/oldweb-all.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container narrow">
    <section class="card">
        <h1>Edit Student</h1>

        <?php foreach ($errors as $error): ?>
            <p class="error"><?= e($error) ?></p>
        <?php endforeach; ?>

        <form method="POST" action="edit.php?id=<?= e($id) ?>">
            <div class="r-field">
                <label for="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    maxlength="100"
                    value="<?= e($student["name"]) ?>"
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
                    value="<?= e($student["email"]) ?>"
                    required
                >
            </div>

            <div class="r-field">
                <label for="course">Course</label>
                <input
                    id="course"
                    name="course"
                    maxlength="100"
                    value="<?= e($student["course"]) ?>"
                    required
                >
            </div>

            <button class="btn btn-primary" type="submit">
                Update Student
            </button>

            <a class="btn btn-secondary" href="r-btn-block r-btn-primary">
                Cancel
            </a>
        </form>
    </section>
</div>

</body>
</html>