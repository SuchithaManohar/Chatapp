export default Chat()
{
    return(
      <body>
<h1>Adium Concept</h1>
<div class="window"/>
  <aside class="conv-list-view">
    <header class="conv-list-view__header">
      <div class="cf">
        <ul class="close-button-list">
          <li></li><li></li><li></li>
        </ul>
        <ul class="function-list">
          <li class="icon-lupe"></li>
        </ul>
      </div>
    </header>
    <ul class="conv-list">
      <li>
        <div class="status">
          <i class="status__indicator--unread-message"></i>    
          <figure class="status__avatar">
            <img src="http://1.gravatar.com/avatar/7ec0cac01b6d505b2bbb2951a722e202?size=80"/>
          </figure>
          <div class="meta">
            <div class="meta__name">Mads Cordes</div>
            <div class="meta__sub--dark">Hi there :</div>
          </div>
        </div>
      </li>      
      <li class="selected">
        <div class="status">
          <i class="status__indicator--replied-message"></i>    
          <figure class="status__avatar">
            <img src="http://1.gravatar.com/avatar/34735b367f6bf8d5d2f38cb3d20d5e36?size=80"/>
          </figure>
          <div class="meta">
            <div class="meta__name">Tim Pietrusky</div>
            <div class="meta__sub--dark">Browserhacks looks great!</div>
          </div>
        </div>
      </li>     
      <li>
        <div class="status">
          <i class="status__indicator--read-message"></i>    
          <figure class="status__avatar">
            <img src="http://0.gravatar.com/avatar/729edf889ced7863dedba95452272bca?size=80"/>
          </figure>
          <div class="meta">
            <div class="meta__name">HugoGiraudel</div>
            <div class="meta__sub--dark">Ok!</div>
          </div>
        </div>
      </li>
    </ul>
  </aside>
  <section class="chat-view"/>
    <header class="chat-view__header">
      <div class="cf">
        <div class="status">
          <i class="status__indicator--online"></i>  
          <div class="meta">
            <div class="meta__name">Tim Pietrusky</div>
            <div class="meta__sub--light">Adium that ass!</div>
          </div>
        </div>
        <ul class="function-list">
          <li class="icon-cloud"></li>
          <li class="icon-clock"></li>
          <li class="icon-dots"></li>
        </ul>
      </div>
    </header>
    <section class="message-view">
      <div class="message--send">
        <div class="message__bubble--send">
          Hi Tim!
        </div>
        <figure class="message__avatar">
          <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" />
        </figure>
      </div>
      <div class="cf"></div>
      
      <div class="message">
        <figure class="message__avatar">
          <img src="http://1.gravatar.com/avatar/34735b367f6bf8d5d2f38cb3d20d5e36?size=80" />
        </figure>
        <div class="message__bubble">
          Hi
        </div>
      </div>      <div class="cf"></div>
      
      <div class="message--send">
        <div class="message__bubble--send">
          Browserhacks looks great!
        </div>
        <figure class="message__avatar">
          <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" />
        </figure>
      </div>
    </section>
    <footer class="chat-view__input"/>
      <div class="input"><input /><span class="input__emoticon"></span></div>
      <div class="status">
        <figure class="status__avatar--small">
          <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" />
        </figure>
      </div>
      </body>
    )
}