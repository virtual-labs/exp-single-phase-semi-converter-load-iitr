
<head>

<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> 
  
</script>

</head>

<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">

### **Introduction**

Single phase fully controlled bridge converters are two quadrant converters having unidirectional
          current with both positive and negative voltage polarity. Thus they can be operated either as a
          controlled rectifier or an inverter. But for some applications that do not utilize the inverter mode
          operation, a fully controlled converter with four thyristors and their associated control and gate drive
          circuit makes the system unnecessarily complicated. In such situations, two of the thyristors of a
          single phase fully controlled converter has to be replaced by diodes. The resulting
          converters are called single phase semi-converter or single phase half controlled converters. Semi-convertors
          are single
          quadrant converters having one polarity of voltage and current at the DC terminals.<br>

### **1. Single Phase Semi-Converter - R Load**<br><br>
<center><img src="images\R load circuit.png" alt="R load circuit" height="250" width="450"
            style="mix-blend-mode: darken; -webkit-filter:contrast(120%)"></center>
<center><b style="font-size:18px;">Fig. 1 Single Phase Semi-converter with R Load</b></center><br>

<center><img src="images\R load waveform.png" alt="Input waveform" height="400" width="400"
            style="mix-blend-mode: darken;"></center>
<center><b>Fig. 2 Waveforms of Single Phase Semi-converter with R Load</b></center><br>


In the figure, shows the circuit diagram of single phase semiconverter bridge rectifier with R load. In this
rectifier two SCRs and two diodes are connected in symmetrical configuration. The operation of this converter mainly consists of three modes:<br><br>
<b>Mode 1: (&alpha; to &pi;)</b><br>
During positive half-cycle of AC input voltage, thyristor T<sub>1</sub> diode D<sub>1</sub> conduct and
thyristor T<sub>1</sub> is fired at &omega;t = &alpha;. Therefore the average output voltage is equal to the
instantaneous supply
voltage and load current flows through T<sub>1</sub>, R, D<sub>1</sub> and back supply again.<br>

<b>Mode 2: (&pi; to &pi; + &alpha;)</b><br>
At instant &omega;t = &pi;, the supply goes through zero and after &pi; supply voltage reverses its polarity. Due to
reverse supply across conducting devices T<sub>1</sub> and D<sub>1</sub>, they turned off at &omega;t = &pi; and this
type
of turn-off is called as "natural" or "line commutation". Therefore, the average output voltage is zero and
load current is also zero.<br>

<b>Mode 3: (&pi; + &alpha; to 2&pi;)</b><br>
At instant &omega;t = &pi; + &alpha;, the supply voltage becomes completely negative i.e., during negative half cycle of
AC input voltage, thyristor T<sub>2</sub> and diode D<sub>2</sub> are forward biased, thyristor T<sub>2</sub>
is fired at &omega;t = &pi; + &alpha;.
Thus the average output is equal to instantaneous supply voltage because due to conduction of T<sub>2</sub>
and D<sub>2</sub>, the load is directly connected to supply. The load current flows through T<sub>2</sub>, R,
D<sub>2</sub>. Thyristor T<sub>2</sub> and diode D<sub>2</sub> conduct upto
2&pi;, at &omega;t = 2&pi; commutation takes place due to natural zero appears across supply.<br>
The average and rms value of output voltage and current are,<br>

<center>

$$V_{o} = \frac {V_{m}}{\pi}( 1 + cos⁡\alpha ) .......(1)$$

</center>

<center>

$$I_{o} = \frac {V_{o}}{R} = \frac {V_{m}}{\pi R} ( 1+ \cos⁡\alpha).......(2)$$

</center>

<center>

$$V_{o~(rms)} = \frac {V_{m}}{\sqrt {2}} \left[ \frac {1}{\pi}\left(\pi - \alpha + \frac {sin 2\alpha}{2}\right) \right]^{\frac {1}{2}}.......(3)$$

</center>

<center>

$$I_{o~(rms)} = \frac {V_{o~(rms)}}{R} =\frac {V_{m}}{\sqrt {2}R} \left[ \frac {1}{\pi}\left(\pi - \alpha + \frac {sin 2\alpha}{2}\right) \right]^{\frac {1}{2}}.......(4)$$

</center>


### **2. Single Phase Semi-Converter - RL Load with Freewheeling Diode**

<center><img src="images\RL load circuit.png" alt="1 phase controlled bridge rectifier" height="250" width="500"
    style="mix-blend-mode: darken;"></center>

<center><b>Fig. 3 Single Phase Semi-converter with RL Load and Freewheeling diode</b></center><br>

<center><img src="images\RL load waveform.png" alt="Input waveform" height="600" width="550"
    style="mix-blend-mode: darken;"></center>
<center><b>Fig. 4 Waveforms of Single Phase Semi-converter with RL Load and Freewheeling diode</b></center><br>

Due to inductive load, there will be a flow of load current even after phase reversal i.e., after completing
          each half cycle. This is because, due to the large inductive nature of the load, the load current has a
          tendency to flow continuously by finding an alternative path through the diode of the same arm of conducting
          SCR even after phase reversal. Thus, there will be no control over the thyristor once it is triggered as seen
          in continuous and discontinuous modes.<br><br> 
          This problem can be overcome by connecting a diode in parallel with the load. This diode is known as a fly-back diode or freewheeling diode. When there is a phase reversal, this diode acts as the short-circuit path for inductive load current rather than passing it through the thyristors. Hence, The thyristor regains its blocking state once there is a phase reversal in the supply.
          The free-wheeling diode improves the load current waveform and increases the input power factor. It also eliminates the damage of the current components from the formation of voltage spikes during the turn-off period of the thyristors and diodes. <br>


In this circuit, at ωt = π, T<sub>1</sub> and D<sub>1</sub> become reverse biased, whereas the freewheeling diode D<sub>f</sub> becomes forward biased. Hence, after ωt = π, the load current will be transferred from T<sub>1</sub> D<sub>1</sub> to D<sub>f</sub>. Now the current flows through the path D<sub>f</sub>, R, L and then D<sub>f</sub>. During this period, the output gets short circulated through D<sub>f</sub> and the output voltage will be zero as shown in the below waveforms.
This process continues from π to π + α. When T<sub>2</sub> is triggered at ωt = π + a, D<sub>2</sub> and D<sub>f</sub> get forward biased. Now the load current shifts from D<sub>f</sub> to T<sub>2</sub> D<sub>2</sub>, and again the load voltage follows the supply voltage till ωt = 2π. At ωt = 2π, T<sub>2</sub> and D<sub>2</sub> get reverse biased, and D<sub>f</sub> gets forward biased, and again the above process repeats.<br><br>
We can see that the above load current and load voltage waveforms are similar to the waveforms of the converter without a freewheeling diode. But here load current due to inductive load is transferred back to it through the freewheeling diode Df rather than through the thyristor and diode combination T<sub>1</sub> D<sub>2</sub> and T<sub>2</sub> D<sub>1</sub>. Hence the freewheeling diode improves the circuit performance and also ensures commutation of thyristors at the end of each half-cycle providing a controlled load current under the triggering circuit.<br><br>
The average and rms of bridge output voltage are,<br><br>

<center>

$$V_{o} = \frac {2}{2\pi} \int_{\alpha}^{\pi} V_{m}sinwt ~ dwt ~=~\frac {2V_{m}}{2\pi}[- cos\omega t]_{\alpha}^{\pi}~=~\frac {V_{m}}{\pi}(1 + cos\alpha).......(5)$$

</center>

<center>

$$V_{o~(rms)} = \left[ \frac {2}{2\pi} \int_{\alpha}^{\pi} V_{m}^2 ~ sin^2wt ~ dwt \right]^{\frac {1}{2}}.......(6)$$

</center>

<center>

$$V_{o~(rms)} = \left[ \frac {V_{m}^{2}}{2\pi} \int_{\alpha}^{\pi} (1 - cos2\omega t) ~ dwt\right]^{\frac {1}{2}}.......(7)$$

</center>

<center>

$$V_{o~(rms)} = \frac {V_{m}}{\sqrt {2}} \left[ \frac {1}{\pi}\left(\pi - \alpha + \frac {sin 2\alpha}{2}\right) \right]^{\frac {1}{2}}.......(8)$$

</center>

### 3. Single Phase Semi-converter - RLE Load with Freewheeling Diode

<center><img src="images\RLE load circuit.png" alt="1 phase controlled bridge rectifier" height="250"
            width="500" style="mix-blend-mode: darken; transform: rotate(-0.1deg);"></center>

<center><b>Fig. 5 Single Phase Semi-converter with RLE Load and Freewheeling diode</b></center><br>

<center><img src="images\RLE load waveform.png" alt="Input waveform" height="600" width="550"
    style="mix-blend-mode: darken; transform: rotate(-0.7deg);"></center>
<center><b>Fig. 6 Waveforms of Single Phase Semi-converter with RLE Load and Freewheeling diode</b></center>
<br>

The circuit consists of two thyristors, two diodes, and a freewheeling diode across the load. After
          &omega;t = 0, thyristor T<sub>1</sub> is forward biased only when source voltage V<sub>m</sub> sin &omega;t exceeds E.
          Thus, T<sub>1</sub> is triggered at a firing angle delay &alpha; such that V<sub>m</sub>sin&alpha; > E. With
          T<sub>1</sub> on, load gets connected to source through T<sub>1</sub> and D<sub>1</sub>. For the period
          &omega;t = &alpha; to &pi;, load current i<sub>o</sub> flows through RLE, D<sub>1</sub>, source and T<sub>1</sub> and
          the load terminal voltage v<sub>o</sub> is of the same waveshape as the ac source voltage v<sub>s</sub>. Soon
          after &omega;t = &pi;, load voltage v<sub>o</sub> tends to reverse as the ac source voltage changes polarity. Just as
          v<sub>o</sub> tends to reverse, FD is forward biased and starts conducting. The load current i<sub>o</sub> is
          transferred from T<sub>1</sub>, D<sub>1</sub> to FD. As SCR T<sub>1</sub> is reverse biased at &omega;t > &pi; through
          FD, therefore load voltage v<sub>o</sub> is zero during &pi; < &omega;t < (&pi; + &alpha;). After &omega;t = &pi;, during
            the negative half cycle, T<sub>2</sub> will be forward biased only when source voltage is more than E. At &omega;t
            = &pi; + &alpha;, source voltage exceeds E, T<sub>2</sub> is therefore triggered. Soon after (&pi;+&alpha;),
            FD is reverse biased and is therefore turned off; load current now shifts from FD to T<sub>2</sub>,
            D<sub>2</sub>. At &omega;t = 2&pi;, FD is again forward biased and output current i<sub>o</sub> is transferred from
            T<sub>2</sub>, D<sub>2</sub> to FD as explained before.<br><br>
The average and rms of bridge output voltage are,<br>
<center>

$$V_{o} = \frac {2}{2\pi} \int_{\alpha}^{\pi} V_{m}\, sinwt\, dwt \,=\,\frac {2V_{m}}{2\pi}[- cos\omega t]_{\alpha}^{\pi}\,=\,\frac {V_{m}}{\pi}(1 + cos\alpha) .......(9)$$

</center>

<center>

$$V_{o~(rms)} = \left[ \frac {2}{2\pi} \int_{\alpha}^{\pi} V_{m}^2 ~ sin^2wt ~ dwt \right]^{\frac {1}{2}}.......(10)$$

</center>

<center>

$$V_{o~(rms)} = \left[ \frac {V_{m}^{2}}{2\pi} \int_{\alpha}^{\pi} (1 - cos2\omega t) ~ dwt\right]^{\frac {1}{2}}.......(11)$$

</center>

<center>

$$V_{o~(rms)} = \frac {V_{m}}{\sqrt {2}} \left[ \frac {1}{\pi}\left(\pi - \alpha + \frac {sin 2\alpha}{2}\right) \right]^{\frac {1}{2}}.......(12)$$

</center>


### **Advantages of Single Phase Semi-converter**

1. Single-phase semiconverters have a straightforward design with fewer components compared to three-phase
converters. This simplicity makes them cost-effective and easier to implement, particularly for low-power
applications.<br>

2. Due to their simpler design, single-phase semiconverters tend to be more compact, making them suitable for
space-constrained applications or when a compact form factor is essential.<br>

3. Controlling single-phase semiconverters is less complex compared to three-phase converters. The control
circuitry is simpler, leading to reduced development and maintenance costs.<br>

4. Single-phase semiconverters find applications in various industries, including small motor drives, battery
chargers, uninterruptible power supplies (UPS), and household appliances like laptops, mobile phone chargers,
and small electronic devices.<br>

5. By varying the firing angle of the semiconductor switches (such as thyristors or silicon-controlled
rectifiers), the output voltage can be controlled effectively. This feature allows for regulation of the
output DC voltage, making it suitable for applications where variable voltage control is required.<br>

6. In regions or applications where only single-phase AC power is available, single-phase semiconverters
become the obvious choice for converting AC to DC.<br>

### **Disadvantages of Single Phase Semi-converter**

1. Compared to three-phase converters, single-phase semiconverters have relatively lower efficiency due to the
pulsating nature of the output current. Three-phase converters offer smoother output and therefore higher
efficiency.<br>

2. Single-phase semiconverters are generally limited to lower power applications. For high-power applications,
three-phase converters are preferred as they distribute the power more evenly and efficiently.<br>

3. The pulsating nature of the output current in single-phase semiconverters can lead to higher harmonic
content in the AC supply, potentially causing issues with power quality and electromagnetic
interference.

### **Applications of Single Phase Semi-converter**

1. High power converters<br>

2. Main line a.c. traction<br>

3. Electroplating<br>

4. Battery Charging Systems<br>

5. Static VAR systems <br>


</div>