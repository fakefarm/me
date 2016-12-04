Jquery

While jquery might not be the hottest thing. It's even getting some flack. It is an essential skill because it gives you a user-friendly syntax to get an idea of how the DOM and HTTP work. Even file access. 

I'm so used to blocks limiting scope that I assume that things nested are not visible to outside scope. So for example, 

```
$(document).ready(function() { 
  $('#tour').on('click', 'button', function() { 
    $.ajax('/photos.html');
  });
});
```

As a Ruby developer, I am surprised to discover that this `$.ajax` call _works_. I just see it nested and don't realize this is possible. It has access to the DOM and works well.

I'm not implying that I'm going to only use JQuery but I think it's contribution is so important I would put it as part of the essential other 3 - HTML, CSS, and pure JS. Becuase when it comes to your job, the purist in you might want to simply use JavaScript but the looming deadline will have you ultimately pick the tool that makes you much more effective and efficient. 

## debugging
  
JQuery is also fantastic for debugging. Open a dev console and grab something using JQuery to see what is on it - events, variables, etc.