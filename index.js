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
      const courseNameInput = document.querySelector('#courseName'); 
      console.log(studentNameInput);
      console.log(personalMessageInput);
      console.log(courseNameInput);
      
  
      const studentName = studentNameInput;
      const personalMessage = personalMessageInput;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName === '' || personalMessage === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      // Certificate Heading
      const certificateTitle = document.createElement('h2');
      certificateTitle.textContent = `Certificate of Achievement`;
      certificateContent.appendChild(certificateTitle);
      // paragraph one
      

      certificateContent.innerHTML = `
    <h2>Certificate of Achievement</h2>
    <p>This is to certify that</p>
    <h3>${studentName}</h3>
    <p>has almost completed the</p>
    <h4>${courseName} Course</h4>
    <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
    <img src="https://codespace-assets.global.ssl.fastly.net/wp/assets/website/codespace-primary-logo-light.svg" alt="Seal" style="margin-top: 20px;">
    <p>${personalMessage}</p>
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

//____________________________________________________________________________________________    

    Certificate of Achievement
      

        This is to certify that


        ${studentNameInput}

        has almost completed the


        ${courseNameInput} Course

        with legendary perseverance and world-class bad-assery for never giving up🏆


        ${personalMessageInput}

        __________________________________
        REMOVED THIS CHUNKY STUFF!
        1.  Scrimba had a better way with 
            template literals
        __________________________________

        const certificateTitle = document.createElement('h2');
      certificateTitle.textContent = `Certificate of Achievement`;
      certificateContent.appendChild(certificateTitle);
      // paragraph one
      const paragraphOne = document.createElement('p');
      paragraphOne.textContent = `This is to certify that`;
      certificateContent.appendChild(paragraphOne);
      // student entry
      const nameOfStudent = document.createElement('h4');
      nameOfStudent.textContent = studentName;
      certificateContent.appendChild(nameOfStudent);
      // paragraph two
      const paragraphTwo = document.createElement('p');
      paragraphTwo.textContent = `has almost completed the`;
      certificateContent.appendChild(paragraphTwo);
      // course entry
      const courseEntry = document.createElement('h4');
      courseEntry.textContent = courseName;
      certificateContent.appendChild(courseEntry);
      // paragraph three
      const paragraphThree = document.createElement('p');
      paragraphThree.textContent = `with legendary perseverance and world-class bad-assery for never giving up🏆`;
      certificateContent.appendChild(paragraphThree);
      // image entry 
      const imageEntry = document.createElement('img');
      imageEntry.textContent = img src="https://codespace-assets.global.ssl.fastly.net/wp/assets/website/codespace-primary-logo-light.svg" alt="Seal" style="margin-top: 20px;">;
      certificateContent.appendChild(imageEntry);
      // personal message 
      const message = document.createElement('p');
      message.textContent = personalMessage;
      certificateContent.appendChild(message);


*/
//____________________________________________________________________________________________