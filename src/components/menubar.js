import './menubar.css';

function MenuBar() {
   return (
      <nav>
         <h3>Hostel Appontment</h3>
         <div className="login-info">
            <div className="name-icon"></div>
            <div className="drop-down">
               <i class="fa fa-caret-down"></i>
            </div>
         </div>
      </nav>
   )
}

export default MenuBar;