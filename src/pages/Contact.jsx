export default function Contact() {
  return (
    <div id="contact">
      <h1>I'd love to hear from you</h1>
      {/* From Uiverse.io by G4b413l  */}
      {/* <div>
        <div class="group">
          <input required="" type="text" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>

        <div class="group">
          <input required="" type="email" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>

        <div class="group">
          <input required="" type="text" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Your message</label>
        </div>
      </div> */}


{/* From Uiverse.io by StarMarketPros  */}
<div class="wrapper">
        <div class="card-switch">
            <label class="switch">

               <div class="flip-card__inner">
                  <div class="flip-card__front">
                     <div class="title">Log in</div>
                     <form action="" class="flip-card__form">
                        <input type="email" placeholder="Email" name="email" class="flip-card__input" />
                        <input type="password" placeholder="Password" name="password" class="flip-card__input" />
                        <button class="flip-card__btn">Let`s go!</button>
                     </form>
                  </div>
                  <div class="flip-card__back">
                     <div class="title">Sign up</div>
                     <form action="" class="flip-card__form">
                        <input type="name" placeholder="Name" class="flip-card__input" />
                        <input type="email" placeholder="Email" name="email" class="flip-card__input" />
                        <input type="password" placeholder="Password" name="password" class="flip-card__input" />
                        <button class="flip-card__btn">Confirm!</button>
                     </form>
                  </div>
               </div>
            </label>
        </div>   
   </div>
    </div>
  );
}
