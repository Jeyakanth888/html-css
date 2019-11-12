
        var mainContainer = document.querySelector(".mainContainer");
        var uploadEle = document.querySelector('.upload-popup');
        var headerBlock = document.querySelector('header');
        var sectionBlock = document.querySelector('.section_block'); 
        var footerBlock = document.querySelector('footer');
        function fnShowUpload() {
            var classCheck = uploadEle.classList.contains("show");
            if (!classCheck) {
                if(pageLoad=='home') {
                    var sliderBlock1 = document.querySelector('#first_slider');
                    var sliderBlock2 = document.querySelector('#second_slider');
                    sliderBlock1.classList.add("overlay-background");
                    sliderBlock2.classList.add("overlay-background");
                }
                mainContainer.style.pointerEvents = "none";
                uploadEle.classList.remove('hide');
                uploadEle.classList.add('show');
            
                headerBlock.classList.add("overlay-background");
                sectionBlock.classList.add("overlay-background");
                footerBlock.classList.add("overlay-background");
                mainContainer.classList.add("overlay-background");
        
            }
        }

        function closeUploadPopup() {
            uploadEle.classList.remove('show');
            uploadEle.classList.add('hide');
            resetBackgroundCSS();
            mainContainer.style.pointerEvents = "auto";
        }

        function fnUploadNewVideo() {
            uploadEle.classList.remove('show');
            uploadEle.classList.add('hide');
            var uploadSuccessEle = document.querySelector('.upload-success-popup');
            uploadSuccessEle.classList.remove('hide');
            uploadSuccessEle.classList.add('show');
        }

        function resetBackgroundCSS() {
            headerBlock.classList.remove("overlay-background");
            sectionBlock.classList.remove("overlay-background");
            footerBlock.classList.remove("overlay-background");
            mainContainer.classList.remove("overlay-background");
      
            if(pageLoad=='home') {
                var sliderBlock1 = document.querySelector('#first_slider');
                var sliderBlock2 = document.querySelector('#second_slider');
                sliderBlock1.classList.remove("overlay-background");
                sliderBlock2.classList.remove("overlay-background");
            }
        }

        function clickOK() {
            var uploadSuccessEle = document.querySelector('.upload-success-popup');
            uploadSuccessEle.classList.remove('show');
            uploadSuccessEle.classList.add('hide');
            resetBackgroundCSS();
        }

        function selectVideo() {
            var selectedFile = document.getElementById('video_source').value;
            var splitarr = selectedFile.split(/\\/);
            var fileName = splitarr[splitarr.length-1];
            if(fileName) {
                document.getElementById('select_video_btn').innerText = fileName;
            } else {
                document.getElementById('select_video_btn').innerText = "Select Video";
            }
        }
