var identityValue = 0
var identityExplored = false;

var slider = document.getElementById("myRange");
var identityValueDisplay = document.getElementById("identity-value");
var identityLabelDisplay = document.getElementById("your-identity-label");
identityValueDisplay.innerHTML = slider.value;

slider.oninput = function() 
{
	identityExplored = true;
	$('.button').css({'background-color':'green'})
	$('.button').prop("disabled", false);
    identityValueDisplay.innerHTML = Math.abs(this.value);
    identityValue = this.value

    if (identityValue==0)
    {
    	identityLabelDisplay.innerHTML = "Neutral"
   		identityLabelDisplay.setAttribute("style","color: purple;");
   		identityValueDisplay.setAttribute("style","color: purple;");
    }

    else if (identityValue > 0 && identityValue <=10)
    {
    	identityLabelDisplay.innerHTML = "Pretty Neutral, maybe with a sprinkle of Conservatism"
   		identityLabelDisplay.setAttribute("style","color: purple;");
   		identityValueDisplay.setAttribute("style","color: red;");
    }

    else if (identityValue > 10 && identityValue <= 25)
    {
    	identityLabelDisplay.innerHTML = "Leaning Conservative"
   		identityLabelDisplay.setAttribute("style","color: red;");
   		identityValueDisplay.setAttribute("style","color: red;");    	
    }

    else if (identityValue > 25 && identityValue <= 50)
    {
    	identityLabelDisplay.innerHTML = "Conservative"
   		identityLabelDisplay.setAttribute("style","color: red;");
   		identityValueDisplay.setAttribute("style","color: red;");    	
    }

    else if (identityValue > 50 && identityValue <= 80)
    {
    	identityLabelDisplay.innerHTML = "Very Conservative"
   		identityLabelDisplay.setAttribute("style","color: red;");
   		identityValueDisplay.setAttribute("style","color: red;");    	
    }

    else if (identityValue > 80 && identityValue <= 100)
    {
    	identityLabelDisplay.innerHTML = "I'm Conservative and I'm Correct."
   		identityLabelDisplay.setAttribute("style","color: red;");
   		identityValueDisplay.setAttribute("style","color: red;");    	
    }

    else if (identityValue < 0 && identityValue >= -10)
    {
    	identityLabelDisplay.innerHTML = "Pretty Neutral, maybe with a sprinkle of Liberalism"
   		identityLabelDisplay.setAttribute("style","color: purple;");
   		identityValueDisplay.setAttribute("style","color: blue;");
    }

    else if (identityValue > 10 && identityValue <= 25)
    {
    	identityLabelDisplay.innerHTML = "Leaning Conservative"
   		identityLabelDisplay.setAttribute("style","color: blue;");
   		identityValueDisplay.setAttribute("style","color: blue;");    	
    }

    else if (identityValue > 25 && identityValue <= 50)
    {
    	identityLabelDisplay.innerHTML = "Conservative"
   		identityLabelDisplay.setAttribute("style","color: blue;");
   		identityValueDisplay.setAttribute("style","color: blue;");    	
    }

    else if (identityValue > 50 && identityValue <= 80)
    {
    	identityLabelDisplay.innerHTML = "Very Conservative"
   		identityLabelDisplay.setAttribute("style","color: blue;");
   		identityValueDisplay.setAttribute("style","color: blue;");    	
    }

    else if (identityValue > 80 && identityValue <= 100)
    {
    	identityLabelDisplay.innerHTML = "I'm Conservative and I'm Correct."
   		identityLabelDisplay.setAttribute("style","color: blue;");
   		identityValueDisplay.setAttribute("style","color: blue;");    	
    }

}


$('#label').html("")


$('.button').hover(
	function(event)
	{
		if (identityExplored)
		{
			$(this).animate({'width':'100%'}, 100)
		}
	},

	function(event)
	{
		if (identityExplored)
		{
			$(this).animate({'width':'50%'}, 100)
		}
	}
)

$(document).on('click', '.button', function()
{
	identity = $(this).attr('identity')
	var color = $(this).css('backgroundColor');
	$('.button').css({'background-color':'gray'})
	$('.button').prop("disabled",true);
	$(this).css({'background-color':color})
	$('#slider').fadeIn()
	$('#value').html("")
})

var onSlider = function(event)
{
	$('#choose').css({'display': 'inline-block'}, 100);
	$('#slider').animate({'height': '60px'}, 100)
}

var offSlider = function(event)
{
	$('#choose').css({'display': 'none'}, 100);
	$('#slider').animate({'height': '60px'}, 100)
	$('#value').html("")
}

$('#slider').mousemove(function(event)
{
	var containerWidth = $('.container').width();
	var fullWidth = $(window).width()
	var margin = (fullWidth-containerWidth)/2
	value = Math.floor(Math.round((event.pageX-margin+35)/(fullWidth-2*margin)*200,2)-100)
	var place = containerWidth-60
	$('#choose').css({'left': event.clientX-30-margin})

	if (0 < value)
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'red'})
	}

	else if (value < 0)
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'blue'})		
	}

	else
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'purple'})		
	}

	if (value<=10 && value>=-10)
	{
		$('#label').html("Pretty Neutral")
		$('#label').css({'color': 'purple'})
	}

	else if (value > 10 && value <=50)
	{
		$('#label').html("Leaning Conservative")
		$('#label').css({'color': 'red'})
	}

	else if (value > 50)
	{
		$('#label').html("Very Conservative")
		$('#label').css({'color': 'red'})
	}

	else if (value < -10 && value >= -50)
	{
		$('#label').html("Leaning Liberal")
		$('#label').css({'color': 'blue'})
	}

	else if (value < -50)
	{
		$('#label').html("Very Liberal")
		$('#label').css({'color': 'blue'})
	}
})

$(document).on('click', '#choose', function(event)
{
	$('#slider').css({'background': 'red'})
})
