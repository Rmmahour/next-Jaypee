        /*homepage counter*/

        	$(window).scroll(function () {
        
        		$('.counter').each(function() {
        			var $this = $(this),
        				countTo = $this.attr('data-number');
        
        			$({ countNum: $this.text()}).animate({
        				countNum: countTo
        			},
        												 {
        				duration: 3000,
        				easing:'linear',
        				step: function() {
        					$this.text(Math.floor(this.countNum));
        				},
        				complete: function() {
        					$this.text(this.countNum);
        				}
        			});
        		});
        
        	});
        	
        	/*homepage counter end*/
        	
        	
        /* Model Care Script */
        
        
        $(document).ready(function () {
  var time = 3;
  var isPause = false,
    tick,
    percentTime = 0;
  var $bar = $('.slide_progress .progress');
  var $status = $('.slide_wrap .slide_paging');
  var $navTabs = $("#modelCareTab button");

  // Initialize the status on page load
  updateStatus(1); // Ensure first tab starts at 1

  // Event listener for tab shown
  $navTabs.on('shown.bs.tab', function(event) {
    var currentIndex = $(event.target).parent().index(); // Get index of the clicked tab
    updateStatus(currentIndex + 1); // Update counting based on the index

    // Restart progress bar when switching tabs
    startProgressbar();
  });

  // Pause and play control
  $(".btn_playcontrol").click(function(){
    if($(this).hasClass("pause")){
      $(this).removeClass("pause");
      isPause = false;  // Resume the progress
    } else {
      $(this).addClass("pause");
      isPause = true;  // Pause the progress
    }
  });

  // Function to update the status of current/total tabs
  function updateStatus(current) {
    $status.html('<span class="count">' + current + '</span> / <span class="pagecount">' + $navTabs.length + '</span>');
  }

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (!isPause) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        var currentIndex = $navTabs.index($navTabs.filter('.active'));
        var nextIndex = (currentIndex + 1) % $navTabs.length;

        // Show the next tab
        $navTabs.eq(nextIndex).tab('show');
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearInterval(tick);  // Corrected to use clearInterval instead of clearTimeout
  }

  startProgressbar();

  // Button for Previous tab
  $('.btn_prev').click(function() {
    var currentIndex = $navTabs.index($navTabs.filter('.active'));
    var prevIndex = (currentIndex - 1 + $navTabs.length) % $navTabs.length;
    $navTabs.eq(prevIndex).tab('show');
    if ($(".btn_playcontrol").hasClass("pause")){
      startProgressbar();
    } 
  });

  // Button for Next tab
  $('.btn_next').click(function() {
    var currentIndex = $navTabs.index($navTabs.filter('.active'));
    var nextIndex = (currentIndex + 1) % $navTabs.length;
    $navTabs.eq(nextIndex).tab('show');
    if ($(".btn_playcontrol").hasClass("pause")){
      startProgressbar();
    }
  });
});


        
        
        
        
            /* Model Script End */



            /* Patient Division */

// document.addEventListener('DOMContentLoaded', function () {
//     // Function to activate a tab based on the URL hash
//     function activateTabFromHash() {
//         const url = new URL(window.location.href);
//         const tabId = url.hash; // e.g., "#Domestic" or "#International"

//         // Check if a valid tab ID is provided in the URL
//         if (tabId && tabId.startsWith('#')) {
//             // Get the tab button by its target (data-bs-target)
//             const tabButton = document.querySelector(`button[data-bs-target="${tabId}"]`);

//             // If the tab button exists, activate the corresponding tab
//             if (tabButton) {
//                 const tab = new bootstrap.Tab(tabButton);
//                 tab.show();
//             }
//         }
//     }

//     // Initially activate the tab if a hash is present
//     activateTabFromHash();

//     // Add event listeners to all tab buttons to update the URL hash on click
//     const tabButtons = document.querySelectorAll('.nav-link');
//     tabButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const target = this.getAttribute('data-bs-target');
//             history.pushState(null, null, target);  // Update the URL hash without reloading the page
//             activateTabFromHash(); // Activate the tab immediately after updating the hash
//         });
//     });

//     // Listen for changes to the hash (e.g., if user manually changes it in the address bar)
//     window.addEventListener('hashchange', activateTabFromHash);
// });

/* Patient Division End */



// <!-- Dr Bites -->
        var owl = $('.doctor-bite-container');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })


//  <!-- Dr Blogs -->
        var owl = $('.doctor_blog_container');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
        









            /* Model script */
            $('.inner_story_box').on('click', function() {
              var videoSrc = $(this).find('video').children('source').attr('src');
              $('#testimonialModal iframe').attr('src', videoSrc + 'autoplay=1');
              $('#testimonialModal').modal('show');
            });
            
            
            /* Select Filter */
        
        $(function () {
            $('#filter_department').on('change', function() {
                var selectedDepartment = $(this).val().toLowerCase();
                
                if (selectedDepartment === 'all') {
                    $('.doctor_box').show();
                } else {
                    $('.doctor_box').each(function() {
                        var $doctorBox = $(this);
                        var postText = $doctorBox.find('.post p').text().toLowerCase();
                        
                        if (postText.includes(selectedDepartment)) {
                            $doctorBox.show();
                        } else {
                            $doctorBox.hide();
                        }
                    });
                }
            });
        });

        
        // $(function () {
        //     $('#filter_speciality').on('change', function() {
        //         var selectedCategory = $(this).val();
                
        //         if (selectedCategory === 'all') {
        //             $('.doctors_container .doctor_box').show();
        //         } else {
        //             $('.doctors_container .doctor_box').each(function() {
        //                 var $doctorBox = $(this);
        //                 if ($doctorBox.data('category') === selectedCategory) {
        //                     $doctorBox.show();
        //                 } else {
        //                     $doctorBox.hide();
        //                 }
        //             });
        //         }
        //     });
        // });

        
        
        // $(function () {
        //     $('#filter_clinics').on('change', function() {
        //         var selectedCategory = $(this).val();
                
        //         if (selectedCategory === 'all') {
        //             $('.doctors_container .doctor_box').show();
        //         } else {
        //             $('.doctors_container .doctor_box').each(function() {
        //                 var $doctorBox = $(this);
        //                 if ($doctorBox.data('category') === selectedCategory) {
        //                     $doctorBox.show();
        //                 } else {
        //                     $doctorBox.hide();
        //                 }
        //             });
        //         }
        //     });
        // });
        
        
        /* End Here */

       
        
        $('a[href*="#"]').on('click', function(e) {
          e.preventDefault();
          var target = $(this).attr("href");
          var targetOffset = $(target).offset().top - 100; // Adjust by 200px
      
          $('html, body').stop().animate({
              scrollTop: targetOffset
          }, 600, function() {
              // Use history.replaceState to update the hash without triggering a jump
              if (history.replaceState) {
                  history.replaceState(null, null, target);
              } else {
                  window.location.hash = target;
              }
          });
      });
      
      
      
          $(window).on('scroll', function() {
              var scrollDistance = $(window).scrollTop() + 100;
              $('.doctors-tab').each(function(i) {
                  if ($(this).offset().top <= scrollDistance + 50) {
                      $('.navigation a.active').removeClass('active');
                      $('.navigation a').eq(i).addClass('active');
                  }
              });
      
              // $('.prod_page_tabs').css('padding-top', $(this).scrollTop() > 0 ? '0px' : '50px');
          }).scroll();

          $(window).on('scroll', function() {
            var scrollDistance = $(window).scrollTop() + 100;
            $('.service-tab').each(function(i) {
                if ($(this).offset().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
                }
            });
    
            // $('.service_top_tabs').css('padding-top', $(this).scrollTop() > 0 ? '80px' : '50px');
        }).scroll();
     
      
      
        
        // <!-- our services -->
        var owl = $('.team-carousel');
        owl.owlCarousel({
            items: 4,
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
        
        
        /* Model script */
        $('.inner_story_box').on('click', function() {
          var videoSrc = $(this).find('video').children('source').attr('src');
          $('#specialityModal iframe').attr('src', videoSrc + 'autoplay=1');
          $('#specialityModal').modal('show');
        });

        /* Model script */
        $('.inner_story_box').on('click', function() {
          var videoSrc = $(this).find('video').children('source').attr('src');
          $('#singleDoctorModal iframe').attr('src', videoSrc + 'autoplay=1');
          $('#singleDoctorModal').modal('show');
        });
     
     
     /* Bread Bottom */

        const stickyTrigger = document.querySelector('.service_top_tabs');
const stickyElement = document.querySelector('.speciality_tabs_grid .right');

window.addEventListener('scroll', () => {
  // Check if the element is sticky by checking its position relative to the viewport
  const stickyRect = stickyTrigger.getBoundingClientRect();

  if (stickyRect.top <= 0) { // when the element hits the top of the viewport
    stickyElement.style.top = '130px';
  } else {
    stickyElement.style.top = ''; // reset the top property when not sticky
  }
});


        /* Bread Bottom End */
        