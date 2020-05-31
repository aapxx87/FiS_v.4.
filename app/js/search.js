$(document).ready(function() {


  $(".input_s").on("keypress", function(event) {

    if (event.keyCode === 13) {

      if ($(".input_s").val() !== "") {

        var comment_text = $(".input_s").val();

        var new_comment = bigBukwa(ubrProb(comment_text));


        $.getJSON('data/data.json', function(data) {

            $.each(data, function(key, val) {

              if (val['name'] === new_comment) {

                $(".output_area p").remove();

                $(".output_area").append("<p>" + val['place'] + "</p>");

                $(".output_area").fadeIn();
                //
                $(".input_s").val("");
                //
                $(".output_area").hide(4000);

              } else {

                // $(".output_area p").remove();
                //
                // $(".output_area").append("<p>" + 'Нет такого' + "</p>");
                // //
                // $(".output_area").fadeIn();
                // //
                // // // $(".input_s").val("");
                // //
                // $(".output_area").hide(4000);

              }

          });

        });

      }

    }

  });



  const ubrProb = (str) => {
    const preobrText = str.trim();
    return preobrText;
  };



  const bigBukwa = (str) => {

    if (str[0] === str[0].toUpperCase()) {
      return str;
    }

    if (str[0] !== str[0].toUpperCase()) {
      const newString = str[0];
      const newString2 = str[0].toUpperCase();
      const body = str.slice(1);
      const newString3 = newString2 + body;
      return newString3;
    }

  };



});
