var agendas;

(function(){
  window.Agenda = Agenda;
  agendas = [];

  function Agenda(settings){
    this.day = settings.day;
    agendas.push(this);
    console.log(agendas);
  }

  Agenda.prototype = {
  };

})();
