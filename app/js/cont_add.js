// $(function() {

  $.getJSON('data/data.json', function(data) {


    $.each(data, function(key, val) {

      if (val['place'] === "Коробка 1") {

        $('#picframe9').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Коробка 2") {

        $('#picframe10').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Коробка 3") {

        $('#picframe11').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Коробка 4") {

        $('#picframe12').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 1") {

        $('#picframe1').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 1") {

        $('#picframe1').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 2") {

        $('#picframe2').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 2.1") {

        $('#picframe2_1').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 3") {

        $('#picframe3').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 4") {

        $('#picframe4').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 5") {

        $('#picframe5').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 6") {

        $('#picframe6').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 7") {

        $('#picframe7').append('<p>' + val['name'] + '</p>');

      } else if (val['place'] === "Антрисоль 8") {

        $('#picframe8').append('<p>' + val['name'] + '</p>');

      }

    });


  });

// });
