# Simple JavaScript and CSS Modalbox

[![Code Climate](https://codeclimate.com/repos/57aef19d77cc124707002c2e/badges/9f86191f5a4dadcdee0b/gpa.svg)](https://codeclimate.com/repos/57aef19d77cc124707002c2e/feed) 

## Usage

Just replace the modal name ```mymodal``` with your desired name.
Exemple: from ``` data-target="mymodal" ``` to ``` data-target="modalexemple" ```.

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

## Modal Settings
```
<script>
var animationDuration = ""; // Set time for animation by default 0.5s
var openAnimation = ""; // true to start the animation or false to disable the animation by default true
</script>

```


## Modal Demo
#####[Open Demo](https://cristiandeveloper.github.io/modalbox/)
