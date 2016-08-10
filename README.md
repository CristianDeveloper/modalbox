# Simple JavaScript and CSS Modalbox

## Usage

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/modalbox.css">
    <title>Modal Box v1.0</title>
</head>
<body>
    <!-- Trigger/Open The Modal -->
    <button id="open-modal" data-target="mymodal">Open small Large</button> <br />

    <!-- The Modal Small -->
    <div class="modal-sec-overlay" id="mymodal">
        <!-- Modal Box -->
        <div class="modal-box modal-small" id="modal-box">
            <!-- Modal Close Button --> 
            <button id="close-modal" data-target="mymodal" class="close-btn">x</button>
            <!-- Modal Title -->
            <div class="modal-title">Modal Exemple</div>
            <!-- Modal content -->
            <div class="modal-content">
                <p>This is some text</p>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/modalbox.js"></script>
</body>
</html>

```
## Modal size 
```
.modal-small - 300px
.modal-medium - 500px
.modal-large - 700px

```
