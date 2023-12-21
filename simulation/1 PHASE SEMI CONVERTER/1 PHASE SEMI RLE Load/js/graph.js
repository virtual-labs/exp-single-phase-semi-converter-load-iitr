function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["L1"]["value"] != 0 &&
    values["DC1"]["value"] != 0 &&
    values["G1"]["fire"] != 0 &&
    values["G3"]["fire"] != 0
  ) {
    const wave_forms = generategraphfinal();
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "882px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "V<sub>INP</sub>",
          marker: {
            color: "Orange",
          },
        },
        {
          x:  wave_forms[1][1],
          y: wave_forms[1][2],
          mode: "lines",
          name: "E",
          marker: {
            color: "green",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() +"/ VDC"+ "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) + 0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse1";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse1",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "V<sub>GP1</sub>  ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse2";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse2",
      [
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "V<sub>GP2</sub>  ",
          marker: {
            color: "Red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM6"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: xvalues,
          y:  wave_forms[4][0],
          mode: "lines",
          name: "V<sub>L</sub>  ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM7"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) + 0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: xvalues,
          y: wave_forms[5][0],
          mode: "lines",
          name: "I<sub>L</sub>   ",
          marker: {
            color: "#ab49dd",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["AC2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (wave_forms[5][1] + 0.1 * wave_forms[5][1]),
            wave_forms[5][1] + 0.1 * wave_forms[5][1],
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current1";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current1",
      [
        {
          x: xvalues,
          y: data[wave_forms[0][3]]['ifwd'],
          mode: "lines",
          name: "I<sub>FWD</sub>   ",
          marker: {
            color: "red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["AM2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (wave_forms[0][1] + 0.1 * wave_forms[0][1]+1),
            (wave_forms[0][1] + 0.1 * wave_forms[0][1]+1),
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "thy1_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy1_voltage",
      [
        {
          x: xvalues,
          y: data[wave_forms[0][3]]['vt1'],
          mode: "lines",
          name: "V<sub>T1</sub>  ",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range:[
            -1 * (wave_forms[0][2] + 0.1 * wave_forms[0][2]),
            wave_forms[0][2] + 0.1 * wave_forms[0][2],
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "thy2_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy2_voltage",
      [
        {
          x: xvalues,
          y: data[wave_forms[0][3]]['vt2'],
          mode: "lines",
          name: "V<sub>T2</sub>  ",
          marker: {
            color: "#23c66b",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range:[
            -1 * (wave_forms[0][2] + 0.1 * wave_forms[0][2]),
            wave_forms[0][2] + 0.1 * wave_forms[0][2],
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}

function generategraphfinal() {
  const sineamplitude = 325;
  const freq = 50;
  const sta1 = values["G1"]["freq"];
  const end1 = values["G1"]["fire"];
  const sta2 = values["G3"]["freq"];
  const end2 = values["G3"]["fire"];
  const loadResistance = values["R1"]["value"];
  const inductance = values["L1"]["value"];
  const dc = values["DC1"]["value"];

  var timep = 1 / freq;
  var timp = timep;

  var starting1 = (timep / 360) * sta1;
  var ending1 = (timep / 360) * end1;
  var starting2 = (timep / 360) * sta2;
  var ending2 = (timep / 360) * end2;
  var xval = [],
    input_voltage = [],
    gate_pulse1 = [],
    gate_pulse2 = [],
    emf = [];
  for (let x = 0; x <= 0.06; x += 0.0001) {
    sine_wave = sineamplitude * Math.sin(2 * Math.PI * freq * x);
    input_voltage.push(sine_wave);
    xval.push(x);
    emf.push(dc);
    if (starting1 <= x && x <= ending1) {
      gate_pulse1.push(1);
    } else {
      gate_pulse1.push(0);
    }

    if (starting2 <= x && x <= ending2) {
      gate_pulse2.push(1);
    } else {
      gate_pulse2.push(0);
    }

    if (x >= timep) {
      starting1 = starting1 + timp;
      ending1 = ending1 + timp;
      starting2 = starting2 + timp;
      ending2 = ending2 + timp;
      timep = timep + timp;
      flag = false;
    }
  }
  var load_current = [],
    load_voltage = [],
    max_current = 0,
    vavg = 0,
    iavg = 0,
    irms = 0,
    vrms = 0;
  /*const a30r10l20e50: {
    vload: number[];
    iload: number[];
    ifwd: number[];
    vt1: number[];
    vt2: number[];
} */
  const reavar = `alpha${sta1}r${loadResistance}l${inductance}e${dc}`;
  for (let i = 0; i < 600; i++) {
    load_v = data[reavar]["vload"][i];
    load_c = data[reavar]["iload"][i];
    load_voltage.push(load_v);
    load_current.push(load_c);
    vavg = vavg + load_v;
    vrms = vrms + load_v * load_v;
    iavg = iavg + load_c;
    irms = irms + load_c * load_c;
    if (load_c > max_current) {
      max_current = load_c;
    }
  }
  var max_free_current = Math.max(data[reavar]["ifwd"]);
  var max_thy_voltage = Math.max(data[reavar]["vt1"]);
  vavg = vavg / 600;
  iavg = iavg / 600;
  vrms = Math.sqrt(vrms / 600);
  irms = Math.sqrt(irms / 600);
  if (vrms < 1) {
    vrms = parseInt(vrms * 1000) / 1000;
  } else {
    vrms = parseInt(vrms * 100) / 100;
  }
  if (irms < 1) {
    irms = parseInt(irms * 1000) / 1000;
  } else {
    irms = parseInt(irms * 100) / 100;
  }
  if (vavg < 1) {
    vavg = parseInt(vavg * 1000) / 1000;
  } else {
    vavg = parseInt(vavg * 100) / 100;
  }
  if (iavg < 1) {
    iavg = parseInt(iavg * 1000) / 1000;
  } else {
    iavg = parseInt(iavg * 100) / 100;
  }
  values["vavg"] = vavg;
  values["iavg"] = iavg;
  values["vrms"] = vrms;
  values["irms"] = irms;

  return [
    [sineamplitude, max_free_current, max_thy_voltage,reavar],
    [input_voltage, xval,emf],
    [gate_pulse1, xval],
    [gate_pulse2, xval],
    [load_voltage, xval],
    [load_current, max_current],
  ];
}
