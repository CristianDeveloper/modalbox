# Simple JavaScript and CSS Modalbox

## Usage

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/modalbox.css">
    <title>Modal Box</title>
</head>
<body>
    <!-- Trigger/Open The Modal -->
    <button id="open-modal" data-target="mymodal">Open Modal box</button> <br />

    <!-- The Modal Small -->
    <div class="modal-sec-overlay" id="mymodal">
        <!-- Modal content -->
        <div class="modal-content modal-small" id="modal-content">
            <button id="close-modal" data-target="mymodal">x</button>
            <p>Small Modal..</p>
        </div>
    </div>
    <script type="text/javascript" src="js/modalbox.js"></script>
</body>
</html>

```
