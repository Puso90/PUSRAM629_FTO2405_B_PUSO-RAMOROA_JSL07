document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName').value;
      const personalMessageInput = document.querySelector('#personalMessage').value;
      const courseNameInput = document.querySelector('#courseName').value; 
      console.log(studentNameInput);
      console.log(personalMessageInput);
      console.log(courseNameInput);
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName === '' || personalMessage === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.textContent = ` 
      Certificate of Achievement
      

        This is to certify that


        ${studentNameInput}

        has almost completed the


        ${courseNameInput} Course

        with legendary perseverance and world-class bad-assery for never giving up🏆


        ${personalMessageInput}
      
      `;
      
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'; // Moved This from the top to here
    });
  });
  



  
//___________________________________________________________________________________________
// COMMENTS & NOTES
/*

    1.  Struggled a bit with the 404 message - never encountered before
    2.  Had forgot that last function was an event listener till I opend previous projects
    3.  Why am I not seeing the createElements and appends 
    4.  The undefined was playing tricks, because I put studentName without the Input at end

// REFERENCE 

    1.  None but previous projects and previous scrimpa



*/
//____________________________________________________________________________________________