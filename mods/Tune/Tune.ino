#define al1 221
#define al2 248
#define al3 278
#define al4 294
#define al5 330
#define al6 371
#define al7 416

#define bl1 248
#define bl2 278
#define bl3 294
#define bl4 330
#define bl5 371
#define bl6 416
#define bl7 467

#define cl1 131
#define cl2 147
#define cl3 165
#define cl4 175
#define cl5 196
#define cl6 221
#define cl7 248

#define dl1 147
#define dl2 165
#define dl3 175
#define dl4 196
#define dl5 221
#define dl6 248
#define dl7 278

#define am1 441
#define am2 495
#define am3 556
#define am4 589
#define am5 661
#define am6 742
#define am7 833

#define bm1 495
#define bm2 556
#define bm3 624
#define bm4 661
#define bm5 742
#define bm6 833
#define bm7 935

#define cm1 262
#define cm2 294
#define cm3 330
#define cm4 350
#define cm5 393
#define cm6 441
#define cm7 495

#define dm1 294
#define dm2 330
#define dm3 350
#define dm4 393
#define dm5 441
#define dm6 495
#define dm7 556

#define ah1 882
#define ah2 990
#define ah3 1112
#define ah4 1178
#define ah5 1322
#define ah6 1484
#define ah7 1665

#define bh1 990
#define bh2 1112
#define bh3 1178
#define bh4 1322
#define bh5 1484
#define bh6 1665
#define bh7 1869

#define ch1 525
#define ch2 589
#define ch3 661
#define ch4 700
#define ch5 786
#define ch6 882
#define ch7 990

#define dh1 589
#define dh2 661
#define dh3 700
#define dh4 786
#define dh5 882
#define dh6 990
#define dh7 1112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.125
#define SIXTEENTH 0.0625

int tune[]=
{
};
float durt[]=
{
};
int length;
int tonepin=6;
void setup()
{
  pinMode(tonepin,OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
  delay(5000);
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    delay(500*durt[x]);
    noTone(tonepin);
  }
}
