var lien = document.querySelector("li");
lien.addEventListener('click', navigation, false);

function navigation(){
    var new_section = "<h3>SURVEY FOR PRIVACY DOCUMENT</h3><p>It seems like this document that you are trying to access to has a content of privacy paper. </br>So if you don't mind, would you please tell me the reason why you wat to view it by completing the survey below ?</p><form method='POST' action='mailto:jeanrenerandrianjakamanana@gmail.com'><label for='email'>Please, enter your E-mail address:</label></br><input id='email' type='email' name='email' required placeholder='jean@jean.com' title='E-mail' /> </br> </br><label for='reason'>Please, state your reasons:</label></br> <textarea id='reason' name='reason' required placeholder='Reasons' title='Reasons'></textarea> </br> </br><input id='submit' type='submit' name='submit' value='SUBMIT' title='submit'/> <input id='reset' type='reset'name='reset'value='RESET' title='reset'/> </br> </br></form> "
    var section = document.querySelector(".section");
    var style = document.querySelector("link");
    
    section.innerHTML = new_section;
    style.setAttribute("href", "CSS/login.css");
}
