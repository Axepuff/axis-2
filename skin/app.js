function Arifmetics(arr1, arr2) {
  var a = Math.round(arr1[0] + Math.random()*(arr1[arr1.length - 1] - arr1[0]));
  var c = Math.round(arr2[0] + Math.random()*(arr2[arr2.length - 1] - arr2[0]));
  var b = c - a;
  text.children[0].innerHTML = a;
  text.children[0].id = a;
  text.children[1].innerHTML = b;
  text.children[1].id = b;
  function Render(term) {
    this.inputPos = (term*39+50 - 15)/2;
    this.input = document.createElement('input');
    this.input.className = 'axis__input';
    this.input.type = 'text';
    this.arrow = document.createElement('div');
    this.arrow.className = 'axis__arrow';
    this.arrow.style.width = term*39  + 'px';
    this.arrow.style.height = term*39/6 + 'px';
    if (document.querySelector('.axis__input')) {
      this.input.style.left = a*39 + this.inputPos  + 'px';
      this.arrow.style.left = a*39 + 35 + 'px';
      axis.appendChild(this.input);
      axis.appendChild(this.arrow);
    }  else {
      this.input.style.left = this.inputPos + 'px';
      this.arrow.style.left = '35px';
      axis.appendChild(this.input);
      axis.appendChild(this.arrow);
    }
    this.accept = function() {
        this.input.style.color = '#000';
        this.input.setAttribute('disabled', 'disabled');
    };
    this.input.focus();
  }
  
  function Check(render, val1, val2) {
    var input = render.input || render;
    input.oninput = function() {
      if(input.value != val1 && render.input)  {
        input.style.color = '#f00';
        document.getElementById(val1).style.background = "#ff6000";
      } else if(input.value != val1) {
        input.style.color = '#f00';
      }
      else if(val2) {
        render.accept();
        input.setAttribute('disabled', 'disabled');
        document.getElementById(val1).style.background = "#fff";
        var render2 = new Render(val2);
        Check(render2, b);
      } else if(!document.getElementById('summ')) {
          input.style.color = '#000';
          input.setAttribute('disabled', 'disabled');
      } else {
        render.accept();
        document.getElementById(val1).style.background = "#fff";
        document.getElementById('summ').remove();
        var final = document.createElement('input');
        final.className = 'axis__summ';
        final.id = c;
        document.querySelector('.axis__txt').appendChild(final);
        final.focus();
        Check(final, c);
      }
  }
}
  var render1 = new Render(a);

  Check(render1, a, b);
}

Arifmetics([6,9], [11,14]);
