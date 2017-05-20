// Source : <http://www.babelstone.co.uk/Unicode/yi.js>
// For use by :
//	Liangshan Yi (Nuosu) Transliteration Converter at <http://www.babelstone.co.uk/Unicode/yi.html>
// Title : yi.js
// Author : Andrew West
// Date Created : 2014-07-04
// Latest Version : 2014-07-04
// 

// Creative Commons Licence:
// CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>
// yi.js by Andrew West is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License

var YiSyllables = 1165;
var YiSyllableFirst = 0xA000;
var YiSyllableLast = 0xA48C;

var YiPinyin = new Array(YiSyllables);
YiPinyin[0] = "it";	// A000
YiPinyin[1] = "ix";	// A001
YiPinyin[2] = "i";	// A002
YiPinyin[3] = "ip";	// A003
YiPinyin[4] = "iet";	// A004
YiPinyin[5] = "iex";	// A005
YiPinyin[6] = "ie";	// A006
YiPinyin[7] = "iep";	// A007
YiPinyin[8] = "at";	// A008
YiPinyin[9] = "ax";	// A009
YiPinyin[10] = "a";	// A00A
YiPinyin[11] = "ap";	// A00B
YiPinyin[12] = "uox";	// A00C
YiPinyin[13] = "uo";	// A00D
YiPinyin[14] = "uop";	// A00E
YiPinyin[15] = "ot";	// A00F
YiPinyin[16] = "ox";	// A010
YiPinyin[17] = "o";	// A011
YiPinyin[18] = "op";	// A012
YiPinyin[19] = "ex";	// A013
YiPinyin[20] = "e";	// A014
YiPinyin[21] = "w";	// A015
YiPinyin[22] = "bit";	// A016
YiPinyin[23] = "bix";	// A017
YiPinyin[24] = "bi";	// A018
YiPinyin[25] = "bip";	// A019
YiPinyin[26] = "biet";	// A01A
YiPinyin[27] = "biex";	// A01B
YiPinyin[28] = "bie";	// A01C
YiPinyin[29] = "biep";	// A01D
YiPinyin[30] = "bat";	// A01E
YiPinyin[31] = "bax";	// A01F
YiPinyin[32] = "ba";	// A020
YiPinyin[33] = "bap";	// A021
YiPinyin[34] = "buox";	// A022
YiPinyin[35] = "buo";	// A023
YiPinyin[36] = "buop";	// A024
YiPinyin[37] = "bot";	// A025
YiPinyin[38] = "box";	// A026
YiPinyin[39] = "bo";	// A027
YiPinyin[40] = "bop";	// A028
YiPinyin[41] = "bex";	// A029
YiPinyin[42] = "be";	// A02A
YiPinyin[43] = "bep";	// A02B
YiPinyin[44] = "but";	// A02C
YiPinyin[45] = "bux";	// A02D
YiPinyin[46] = "bu";	// A02E
YiPinyin[47] = "bup";	// A02F
YiPinyin[48] = "burx";	// A030
YiPinyin[49] = "bur";	// A031
YiPinyin[50] = "byt";	// A032
YiPinyin[51] = "byx";	// A033
YiPinyin[52] = "by";	// A034
YiPinyin[53] = "byp";	// A035
YiPinyin[54] = "byrx";	// A036
YiPinyin[55] = "byr";	// A037
YiPinyin[56] = "pit";	// A038
YiPinyin[57] = "pix";	// A039
YiPinyin[58] = "pi";	// A03A
YiPinyin[59] = "pip";	// A03B
YiPinyin[60] = "piex";	// A03C
YiPinyin[61] = "pie";	// A03D
YiPinyin[62] = "piep";	// A03E
YiPinyin[63] = "pat";	// A03F
YiPinyin[64] = "pax";	// A040
YiPinyin[65] = "pa";	// A041
YiPinyin[66] = "pap";	// A042
YiPinyin[67] = "puox";	// A043
YiPinyin[68] = "puo";	// A044
YiPinyin[69] = "puop";	// A045
YiPinyin[70] = "pot";	// A046
YiPinyin[71] = "pox";	// A047
YiPinyin[72] = "po";	// A048
YiPinyin[73] = "pop";	// A049
YiPinyin[74] = "put";	// A04A
YiPinyin[75] = "pux";	// A04B
YiPinyin[76] = "pu";	// A04C
YiPinyin[77] = "pup";	// A04D
YiPinyin[78] = "purx";	// A04E
YiPinyin[79] = "pur";	// A04F
YiPinyin[80] = "pyt";	// A050
YiPinyin[81] = "pyx";	// A051
YiPinyin[82] = "py";	// A052
YiPinyin[83] = "pyp";	// A053
YiPinyin[84] = "pyrx";	// A054
YiPinyin[85] = "pyr";	// A055
YiPinyin[86] = "bbit";	// A056
YiPinyin[87] = "bbix";	// A057
YiPinyin[88] = "bbi";	// A058
YiPinyin[89] = "bbip";	// A059
YiPinyin[90] = "bbiet";	// A05A
YiPinyin[91] = "bbiex";	// A05B
YiPinyin[92] = "bbie";	// A05C
YiPinyin[93] = "bbiep";	// A05D
YiPinyin[94] = "bbat";	// A05E
YiPinyin[95] = "bbax";	// A05F
YiPinyin[96] = "bba";	// A060
YiPinyin[97] = "bbap";	// A061
YiPinyin[98] = "bbuox";	// A062
YiPinyin[99] = "bbuo";	// A063
YiPinyin[100] = "bbuop";	// A064
YiPinyin[101] = "bbot";	// A065
YiPinyin[102] = "bbox";	// A066
YiPinyin[103] = "bbo";	// A067
YiPinyin[104] = "bbop";	// A068
YiPinyin[105] = "bbex";	// A069
YiPinyin[106] = "bbe";	// A06A
YiPinyin[107] = "bbep";	// A06B
YiPinyin[108] = "bbut";	// A06C
YiPinyin[109] = "bbux";	// A06D
YiPinyin[110] = "bbu";	// A06E
YiPinyin[111] = "bbup";	// A06F
YiPinyin[112] = "bburx";	// A070
YiPinyin[113] = "bbur";	// A071
YiPinyin[114] = "bbyt";	// A072
YiPinyin[115] = "bbyx";	// A073
YiPinyin[116] = "bby";	// A074
YiPinyin[117] = "bbyp";	// A075
YiPinyin[118] = "nbit";	// A076
YiPinyin[119] = "nbix";	// A077
YiPinyin[120] = "nbi";	// A078
YiPinyin[121] = "nbip";	// A079
YiPinyin[122] = "nbiex";	// A07A
YiPinyin[123] = "nbie";	// A07B
YiPinyin[124] = "nbiep";	// A07C
YiPinyin[125] = "nbat";	// A07D
YiPinyin[126] = "nbax";	// A07E
YiPinyin[127] = "nba";	// A07F
YiPinyin[128] = "nbap";	// A080
YiPinyin[129] = "nbot";	// A081
YiPinyin[130] = "nbox";	// A082
YiPinyin[131] = "nbo";	// A083
YiPinyin[132] = "nbop";	// A084
YiPinyin[133] = "nbut";	// A085
YiPinyin[134] = "nbux";	// A086
YiPinyin[135] = "nbu";	// A087
YiPinyin[136] = "nbup";	// A088
YiPinyin[137] = "nburx";	// A089
YiPinyin[138] = "nbur";	// A08A
YiPinyin[139] = "nbyt";	// A08B
YiPinyin[140] = "nbyx";	// A08C
YiPinyin[141] = "nby";	// A08D
YiPinyin[142] = "nbyp";	// A08E
YiPinyin[143] = "nbyrx";	// A08F
YiPinyin[144] = "nbyr";	// A090
YiPinyin[145] = "hmit";	// A091
YiPinyin[146] = "hmix";	// A092
YiPinyin[147] = "hmi";	// A093
YiPinyin[148] = "hmip";	// A094
YiPinyin[149] = "hmiex";	// A095
YiPinyin[150] = "hmie";	// A096
YiPinyin[151] = "hmiep";	// A097
YiPinyin[152] = "hmat";	// A098
YiPinyin[153] = "hmax";	// A099
YiPinyin[154] = "hma";	// A09A
YiPinyin[155] = "hmap";	// A09B
YiPinyin[156] = "hmuox";	// A09C
YiPinyin[157] = "hmuo";	// A09D
YiPinyin[158] = "hmuop";	// A09E
YiPinyin[159] = "hmot";	// A09F
YiPinyin[160] = "hmox";	// A0A0
YiPinyin[161] = "hmo";	// A0A1
YiPinyin[162] = "hmop";	// A0A2
YiPinyin[163] = "hmut";	// A0A3
YiPinyin[164] = "hmux";	// A0A4
YiPinyin[165] = "hmu";	// A0A5
YiPinyin[166] = "hmup";	// A0A6
YiPinyin[167] = "hmurx";	// A0A7
YiPinyin[168] = "hmur";	// A0A8
YiPinyin[169] = "hmyx";	// A0A9
YiPinyin[170] = "hmy";	// A0AA
YiPinyin[171] = "hmyp";	// A0AB
YiPinyin[172] = "hmyrx";	// A0AC
YiPinyin[173] = "hmyr";	// A0AD
YiPinyin[174] = "mit";	// A0AE
YiPinyin[175] = "mix";	// A0AF
YiPinyin[176] = "mi";	// A0B0
YiPinyin[177] = "mip";	// A0B1
YiPinyin[178] = "miex";	// A0B2
YiPinyin[179] = "mie";	// A0B3
YiPinyin[180] = "miep";	// A0B4
YiPinyin[181] = "mat";	// A0B5
YiPinyin[182] = "max";	// A0B6
YiPinyin[183] = "ma";	// A0B7
YiPinyin[184] = "map";	// A0B8
YiPinyin[185] = "muot";	// A0B9
YiPinyin[186] = "muox";	// A0BA
YiPinyin[187] = "muo";	// A0BB
YiPinyin[188] = "muop";	// A0BC
YiPinyin[189] = "mot";	// A0BD
YiPinyin[190] = "mox";	// A0BE
YiPinyin[191] = "mo";	// A0BF
YiPinyin[192] = "mop";	// A0C0
YiPinyin[193] = "mex";	// A0C1
YiPinyin[194] = "me";	// A0C2
YiPinyin[195] = "mut";	// A0C3
YiPinyin[196] = "mux";	// A0C4
YiPinyin[197] = "mu";	// A0C5
YiPinyin[198] = "mup";	// A0C6
YiPinyin[199] = "murx";	// A0C7
YiPinyin[200] = "mur";	// A0C8
YiPinyin[201] = "myt";	// A0C9
YiPinyin[202] = "myx";	// A0CA
YiPinyin[203] = "my";	// A0CB
YiPinyin[204] = "myp";	// A0CC
YiPinyin[205] = "fit";	// A0CD
YiPinyin[206] = "fix";	// A0CE
YiPinyin[207] = "fi";	// A0CF
YiPinyin[208] = "fip";	// A0D0
YiPinyin[209] = "fat";	// A0D1
YiPinyin[210] = "fax";	// A0D2
YiPinyin[211] = "fa";	// A0D3
YiPinyin[212] = "fap";	// A0D4
YiPinyin[213] = "fox";	// A0D5
YiPinyin[214] = "fo";	// A0D6
YiPinyin[215] = "fop";	// A0D7
YiPinyin[216] = "fut";	// A0D8
YiPinyin[217] = "fux";	// A0D9
YiPinyin[218] = "fu";	// A0DA
YiPinyin[219] = "fup";	// A0DB
YiPinyin[220] = "furx";	// A0DC
YiPinyin[221] = "fur";	// A0DD
YiPinyin[222] = "fyt";	// A0DE
YiPinyin[223] = "fyx";	// A0DF
YiPinyin[224] = "fy";	// A0E0
YiPinyin[225] = "fyp";	// A0E1
YiPinyin[226] = "vit";	// A0E2
YiPinyin[227] = "vix";	// A0E3
YiPinyin[228] = "vi";	// A0E4
YiPinyin[229] = "vip";	// A0E5
YiPinyin[230] = "viet";	// A0E6
YiPinyin[231] = "viex";	// A0E7
YiPinyin[232] = "vie";	// A0E8
YiPinyin[233] = "viep";	// A0E9
YiPinyin[234] = "vat";	// A0EA
YiPinyin[235] = "vax";	// A0EB
YiPinyin[236] = "va";	// A0EC
YiPinyin[237] = "vap";	// A0ED
YiPinyin[238] = "vot";	// A0EE
YiPinyin[239] = "vox";	// A0EF
YiPinyin[240] = "vo";	// A0F0
YiPinyin[241] = "vop";	// A0F1
YiPinyin[242] = "vex";	// A0F2
YiPinyin[243] = "vep";	// A0F3
YiPinyin[244] = "vut";	// A0F4
YiPinyin[245] = "vux";	// A0F5
YiPinyin[246] = "vu";	// A0F6
YiPinyin[247] = "vup";	// A0F7
YiPinyin[248] = "vurx";	// A0F8
YiPinyin[249] = "vur";	// A0F9
YiPinyin[250] = "vyt";	// A0FA
YiPinyin[251] = "vyx";	// A0FB
YiPinyin[252] = "vy";	// A0FC
YiPinyin[253] = "vyp";	// A0FD
YiPinyin[254] = "vyrx";	// A0FE
YiPinyin[255] = "vyr";	// A0FF
YiPinyin[256] = "dit";	// A100
YiPinyin[257] = "dix";	// A101
YiPinyin[258] = "di";	// A102
YiPinyin[259] = "dip";	// A103
YiPinyin[260] = "diex";	// A104
YiPinyin[261] = "die";	// A105
YiPinyin[262] = "diep";	// A106
YiPinyin[263] = "dat";	// A107
YiPinyin[264] = "dax";	// A108
YiPinyin[265] = "da";	// A109
YiPinyin[266] = "dap";	// A10A
YiPinyin[267] = "duox";	// A10B
YiPinyin[268] = "duo";	// A10C
YiPinyin[269] = "dot";	// A10D
YiPinyin[270] = "dox";	// A10E
YiPinyin[271] = "do";	// A10F
YiPinyin[272] = "dop";	// A110
YiPinyin[273] = "dex";	// A111
YiPinyin[274] = "de";	// A112
YiPinyin[275] = "dep";	// A113
YiPinyin[276] = "dut";	// A114
YiPinyin[277] = "dux";	// A115
YiPinyin[278] = "du";	// A116
YiPinyin[279] = "dup";	// A117
YiPinyin[280] = "durx";	// A118
YiPinyin[281] = "dur";	// A119
YiPinyin[282] = "tit";	// A11A
YiPinyin[283] = "tix";	// A11B
YiPinyin[284] = "ti";	// A11C
YiPinyin[285] = "tip";	// A11D
YiPinyin[286] = "tiex";	// A11E
YiPinyin[287] = "tie";	// A11F
YiPinyin[288] = "tiep";	// A120
YiPinyin[289] = "tat";	// A121
YiPinyin[290] = "tax";	// A122
YiPinyin[291] = "ta";	// A123
YiPinyin[292] = "tap";	// A124
YiPinyin[293] = "tuot";	// A125
YiPinyin[294] = "tuox";	// A126
YiPinyin[295] = "tuo";	// A127
YiPinyin[296] = "tuop";	// A128
YiPinyin[297] = "tot";	// A129
YiPinyin[298] = "tox";	// A12A
YiPinyin[299] = "to";	// A12B
YiPinyin[300] = "top";	// A12C
YiPinyin[301] = "tex";	// A12D
YiPinyin[302] = "te";	// A12E
YiPinyin[303] = "tep";	// A12F
YiPinyin[304] = "tut";	// A130
YiPinyin[305] = "tux";	// A131
YiPinyin[306] = "tu";	// A132
YiPinyin[307] = "tup";	// A133
YiPinyin[308] = "turx";	// A134
YiPinyin[309] = "tur";	// A135
YiPinyin[310] = "ddit";	// A136
YiPinyin[311] = "ddix";	// A137
YiPinyin[312] = "ddi";	// A138
YiPinyin[313] = "ddip";	// A139
YiPinyin[314] = "ddiex";	// A13A
YiPinyin[315] = "ddie";	// A13B
YiPinyin[316] = "ddiep";	// A13C
YiPinyin[317] = "ddat";	// A13D
YiPinyin[318] = "ddax";	// A13E
YiPinyin[319] = "dda";	// A13F
YiPinyin[320] = "ddap";	// A140
YiPinyin[321] = "dduox";	// A141
YiPinyin[322] = "dduo";	// A142
YiPinyin[323] = "dduop";	// A143
YiPinyin[324] = "ddot";	// A144
YiPinyin[325] = "ddox";	// A145
YiPinyin[326] = "ddo";	// A146
YiPinyin[327] = "ddop";	// A147
YiPinyin[328] = "ddex";	// A148
YiPinyin[329] = "dde";	// A149
YiPinyin[330] = "ddep";	// A14A
YiPinyin[331] = "ddut";	// A14B
YiPinyin[332] = "ddux";	// A14C
YiPinyin[333] = "ddu";	// A14D
YiPinyin[334] = "ddup";	// A14E
YiPinyin[335] = "ddurx";	// A14F
YiPinyin[336] = "ddur";	// A150
YiPinyin[337] = "ndit";	// A151
YiPinyin[338] = "ndix";	// A152
YiPinyin[339] = "ndi";	// A153
YiPinyin[340] = "ndip";	// A154
YiPinyin[341] = "ndiex";	// A155
YiPinyin[342] = "ndie";	// A156
YiPinyin[343] = "ndat";	// A157
YiPinyin[344] = "ndax";	// A158
YiPinyin[345] = "nda";	// A159
YiPinyin[346] = "ndap";	// A15A
YiPinyin[347] = "ndot";	// A15B
YiPinyin[348] = "ndox";	// A15C
YiPinyin[349] = "ndo";	// A15D
YiPinyin[350] = "ndop";	// A15E
YiPinyin[351] = "ndex";	// A15F
YiPinyin[352] = "nde";	// A160
YiPinyin[353] = "ndep";	// A161
YiPinyin[354] = "ndut";	// A162
YiPinyin[355] = "ndux";	// A163
YiPinyin[356] = "ndu";	// A164
YiPinyin[357] = "ndup";	// A165
YiPinyin[358] = "ndurx";	// A166
YiPinyin[359] = "ndur";	// A167
YiPinyin[360] = "hnit";	// A168
YiPinyin[361] = "hnix";	// A169
YiPinyin[362] = "hni";	// A16A
YiPinyin[363] = "hnip";	// A16B
YiPinyin[364] = "hniet";	// A16C
YiPinyin[365] = "hniex";	// A16D
YiPinyin[366] = "hnie";	// A16E
YiPinyin[367] = "hniep";	// A16F
YiPinyin[368] = "hnat";	// A170
YiPinyin[369] = "hnax";	// A171
YiPinyin[370] = "hna";	// A172
YiPinyin[371] = "hnap";	// A173
YiPinyin[372] = "hnuox";	// A174
YiPinyin[373] = "hnuo";	// A175
YiPinyin[374] = "hnot";	// A176
YiPinyin[375] = "hnox";	// A177
YiPinyin[376] = "hnop";	// A178
YiPinyin[377] = "hnex";	// A179
YiPinyin[378] = "hne";	// A17A
YiPinyin[379] = "hnep";	// A17B
YiPinyin[380] = "hnut";	// A17C
YiPinyin[381] = "nit";	// A17D
YiPinyin[382] = "nix";	// A17E
YiPinyin[383] = "ni";	// A17F
YiPinyin[384] = "nip";	// A180
YiPinyin[385] = "niex";	// A181
YiPinyin[386] = "nie";	// A182
YiPinyin[387] = "niep";	// A183
YiPinyin[388] = "nax";	// A184
YiPinyin[389] = "na";	// A185
YiPinyin[390] = "nap";	// A186
YiPinyin[391] = "nuox";	// A187
YiPinyin[392] = "nuo";	// A188
YiPinyin[393] = "nuop";	// A189
YiPinyin[394] = "not";	// A18A
YiPinyin[395] = "nox";	// A18B
YiPinyin[396] = "no";	// A18C
YiPinyin[397] = "nop";	// A18D
YiPinyin[398] = "nex";	// A18E
YiPinyin[399] = "ne";	// A18F
YiPinyin[400] = "nep";	// A190
YiPinyin[401] = "nut";	// A191
YiPinyin[402] = "nux";	// A192
YiPinyin[403] = "nu";	// A193
YiPinyin[404] = "nup";	// A194
YiPinyin[405] = "nurx";	// A195
YiPinyin[406] = "nur";	// A196
YiPinyin[407] = "hlit";	// A197
YiPinyin[408] = "hlix";	// A198
YiPinyin[409] = "hli";	// A199
YiPinyin[410] = "hlip";	// A19A
YiPinyin[411] = "hliex";	// A19B
YiPinyin[412] = "hlie";	// A19C
YiPinyin[413] = "hliep";	// A19D
YiPinyin[414] = "hlat";	// A19E
YiPinyin[415] = "hlax";	// A19F
YiPinyin[416] = "hla";	// A1A0
YiPinyin[417] = "hlap";	// A1A1
YiPinyin[418] = "hluox";	// A1A2
YiPinyin[419] = "hluo";	// A1A3
YiPinyin[420] = "hluop";	// A1A4
YiPinyin[421] = "hlox";	// A1A5
YiPinyin[422] = "hlo";	// A1A6
YiPinyin[423] = "hlop";	// A1A7
YiPinyin[424] = "hlex";	// A1A8
YiPinyin[425] = "hle";	// A1A9
YiPinyin[426] = "hlep";	// A1AA
YiPinyin[427] = "hlut";	// A1AB
YiPinyin[428] = "hlux";	// A1AC
YiPinyin[429] = "hlu";	// A1AD
YiPinyin[430] = "hlup";	// A1AE
YiPinyin[431] = "hlurx";	// A1AF
YiPinyin[432] = "hlur";	// A1B0
YiPinyin[433] = "hlyt";	// A1B1
YiPinyin[434] = "hlyx";	// A1B2
YiPinyin[435] = "hly";	// A1B3
YiPinyin[436] = "hlyp";	// A1B4
YiPinyin[437] = "hlyrx";	// A1B5
YiPinyin[438] = "hlyr";	// A1B6
YiPinyin[439] = "lit";	// A1B7
YiPinyin[440] = "lix";	// A1B8
YiPinyin[441] = "li";	// A1B9
YiPinyin[442] = "lip";	// A1BA
YiPinyin[443] = "liet";	// A1BB
YiPinyin[444] = "liex";	// A1BC
YiPinyin[445] = "lie";	// A1BD
YiPinyin[446] = "liep";	// A1BE
YiPinyin[447] = "lat";	// A1BF
YiPinyin[448] = "lax";	// A1C0
YiPinyin[449] = "la";	// A1C1
YiPinyin[450] = "lap";	// A1C2
YiPinyin[451] = "luot";	// A1C3
YiPinyin[452] = "luox";	// A1C4
YiPinyin[453] = "luo";	// A1C5
YiPinyin[454] = "luop";	// A1C6
YiPinyin[455] = "lot";	// A1C7
YiPinyin[456] = "lox";	// A1C8
YiPinyin[457] = "lo";	// A1C9
YiPinyin[458] = "lop";	// A1CA
YiPinyin[459] = "lex";	// A1CB
YiPinyin[460] = "le";	// A1CC
YiPinyin[461] = "lep";	// A1CD
YiPinyin[462] = "lut";	// A1CE
YiPinyin[463] = "lux";	// A1CF
YiPinyin[464] = "lu";	// A1D0
YiPinyin[465] = "lup";	// A1D1
YiPinyin[466] = "lurx";	// A1D2
YiPinyin[467] = "lur";	// A1D3
YiPinyin[468] = "lyt";	// A1D4
YiPinyin[469] = "lyx";	// A1D5
YiPinyin[470] = "ly";	// A1D6
YiPinyin[471] = "lyp";	// A1D7
YiPinyin[472] = "lyrx";	// A1D8
YiPinyin[473] = "lyr";	// A1D9
YiPinyin[474] = "git";	// A1DA
YiPinyin[475] = "gix";	// A1DB
YiPinyin[476] = "gi";	// A1DC
YiPinyin[477] = "gip";	// A1DD
YiPinyin[478] = "giet";	// A1DE
YiPinyin[479] = "giex";	// A1DF
YiPinyin[480] = "gie";	// A1E0
YiPinyin[481] = "giep";	// A1E1
YiPinyin[482] = "gat";	// A1E2
YiPinyin[483] = "gax";	// A1E3
YiPinyin[484] = "ga";	// A1E4
YiPinyin[485] = "gap";	// A1E5
YiPinyin[486] = "guot";	// A1E6
YiPinyin[487] = "guox";	// A1E7
YiPinyin[488] = "guo";	// A1E8
YiPinyin[489] = "guop";	// A1E9
YiPinyin[490] = "got";	// A1EA
YiPinyin[491] = "gox";	// A1EB
YiPinyin[492] = "go";	// A1EC
YiPinyin[493] = "gop";	// A1ED
YiPinyin[494] = "get";	// A1EE
YiPinyin[495] = "gex";	// A1EF
YiPinyin[496] = "ge";	// A1F0
YiPinyin[497] = "gep";	// A1F1
YiPinyin[498] = "gut";	// A1F2
YiPinyin[499] = "gux";	// A1F3
YiPinyin[500] = "gu";	// A1F4
YiPinyin[501] = "gup";	// A1F5
YiPinyin[502] = "gurx";	// A1F6
YiPinyin[503] = "gur";	// A1F7
YiPinyin[504] = "kit";	// A1F8
YiPinyin[505] = "kix";	// A1F9
YiPinyin[506] = "ki";	// A1FA
YiPinyin[507] = "kip";	// A1FB
YiPinyin[508] = "kiex";	// A1FC
YiPinyin[509] = "kie";	// A1FD
YiPinyin[510] = "kiep";	// A1FE
YiPinyin[511] = "kat";	// A1FF
YiPinyin[512] = "kax";	// A200
YiPinyin[513] = "ka";	// A201
YiPinyin[514] = "kap";	// A202
YiPinyin[515] = "kuox";	// A203
YiPinyin[516] = "kuo";	// A204
YiPinyin[517] = "kuop";	// A205
YiPinyin[518] = "kot";	// A206
YiPinyin[519] = "kox";	// A207
YiPinyin[520] = "ko";	// A208
YiPinyin[521] = "kop";	// A209
YiPinyin[522] = "ket";	// A20A
YiPinyin[523] = "kex";	// A20B
YiPinyin[524] = "ke";	// A20C
YiPinyin[525] = "kep";	// A20D
YiPinyin[526] = "kut";	// A20E
YiPinyin[527] = "kux";	// A20F
YiPinyin[528] = "ku";	// A210
YiPinyin[529] = "kup";	// A211
YiPinyin[530] = "kurx";	// A212
YiPinyin[531] = "kur";	// A213
YiPinyin[532] = "ggit";	// A214
YiPinyin[533] = "ggix";	// A215
YiPinyin[534] = "ggi";	// A216
YiPinyin[535] = "ggiex";	// A217
YiPinyin[536] = "ggie";	// A218
YiPinyin[537] = "ggiep";	// A219
YiPinyin[538] = "ggat";	// A21A
YiPinyin[539] = "ggax";	// A21B
YiPinyin[540] = "gga";	// A21C
YiPinyin[541] = "ggap";	// A21D
YiPinyin[542] = "gguot";	// A21E
YiPinyin[543] = "gguox";	// A21F
YiPinyin[544] = "gguo";	// A220
YiPinyin[545] = "gguop";	// A221
YiPinyin[546] = "ggot";	// A222
YiPinyin[547] = "ggox";	// A223
YiPinyin[548] = "ggo";	// A224
YiPinyin[549] = "ggop";	// A225
YiPinyin[550] = "gget";	// A226
YiPinyin[551] = "ggex";	// A227
YiPinyin[552] = "gge";	// A228
YiPinyin[553] = "ggep";	// A229
YiPinyin[554] = "ggut";	// A22A
YiPinyin[555] = "ggux";	// A22B
YiPinyin[556] = "ggu";	// A22C
YiPinyin[557] = "ggup";	// A22D
YiPinyin[558] = "ggurx";	// A22E
YiPinyin[559] = "ggur";	// A22F
YiPinyin[560] = "mgiex";	// A230
YiPinyin[561] = "mgie";	// A231
YiPinyin[562] = "mgat";	// A232
YiPinyin[563] = "mgax";	// A233
YiPinyin[564] = "mga";	// A234
YiPinyin[565] = "mgap";	// A235
YiPinyin[566] = "mguox";	// A236
YiPinyin[567] = "mguo";	// A237
YiPinyin[568] = "mguop";	// A238
YiPinyin[569] = "mgot";	// A239
YiPinyin[570] = "mgox";	// A23A
YiPinyin[571] = "mgo";	// A23B
YiPinyin[572] = "mgop";	// A23C
YiPinyin[573] = "mgex";	// A23D
YiPinyin[574] = "mge";	// A23E
YiPinyin[575] = "mgep";	// A23F
YiPinyin[576] = "mgut";	// A240
YiPinyin[577] = "mgux";	// A241
YiPinyin[578] = "mgu";	// A242
YiPinyin[579] = "mgup";	// A243
YiPinyin[580] = "mgurx";	// A244
YiPinyin[581] = "mgur";	// A245
YiPinyin[582] = "hxit";	// A246
YiPinyin[583] = "hxix";	// A247
YiPinyin[584] = "hxi";	// A248
YiPinyin[585] = "hxip";	// A249
YiPinyin[586] = "hxiet";	// A24A
YiPinyin[587] = "hxiex";	// A24B
YiPinyin[588] = "hxie";	// A24C
YiPinyin[589] = "hxiep";	// A24D
YiPinyin[590] = "hxat";	// A24E
YiPinyin[591] = "hxax";	// A24F
YiPinyin[592] = "hxa";	// A250
YiPinyin[593] = "hxap";	// A251
YiPinyin[594] = "hxuot";	// A252
YiPinyin[595] = "hxuox";	// A253
YiPinyin[596] = "hxuo";	// A254
YiPinyin[597] = "hxuop";	// A255
YiPinyin[598] = "hxot";	// A256
YiPinyin[599] = "hxox";	// A257
YiPinyin[600] = "hxo";	// A258
YiPinyin[601] = "hxop";	// A259
YiPinyin[602] = "hxex";	// A25A
YiPinyin[603] = "hxe";	// A25B
YiPinyin[604] = "hxep";	// A25C
YiPinyin[605] = "ngiex";	// A25D
YiPinyin[606] = "ngie";	// A25E
YiPinyin[607] = "ngiep";	// A25F
YiPinyin[608] = "ngat";	// A260
YiPinyin[609] = "ngax";	// A261
YiPinyin[610] = "nga";	// A262
YiPinyin[611] = "ngap";	// A263
YiPinyin[612] = "nguot";	// A264
YiPinyin[613] = "nguox";	// A265
YiPinyin[614] = "nguo";	// A266
YiPinyin[615] = "ngot";	// A267
YiPinyin[616] = "ngox";	// A268
YiPinyin[617] = "ngo";	// A269
YiPinyin[618] = "ngop";	// A26A
YiPinyin[619] = "ngex";	// A26B
YiPinyin[620] = "nge";	// A26C
YiPinyin[621] = "ngep";	// A26D
YiPinyin[622] = "hit";	// A26E
YiPinyin[623] = "hiex";	// A26F
YiPinyin[624] = "hie";	// A270
YiPinyin[625] = "hat";	// A271
YiPinyin[626] = "hax";	// A272
YiPinyin[627] = "ha";	// A273
YiPinyin[628] = "hap";	// A274
YiPinyin[629] = "huot";	// A275
YiPinyin[630] = "huox";	// A276
YiPinyin[631] = "huo";	// A277
YiPinyin[632] = "huop";	// A278
YiPinyin[633] = "hot";	// A279
YiPinyin[634] = "hox";	// A27A
YiPinyin[635] = "ho";	// A27B
YiPinyin[636] = "hop";	// A27C
YiPinyin[637] = "hex";	// A27D
YiPinyin[638] = "he";	// A27E
YiPinyin[639] = "hep";	// A27F
YiPinyin[640] = "wat";	// A280
YiPinyin[641] = "wax";	// A281
YiPinyin[642] = "wa";	// A282
YiPinyin[643] = "wap";	// A283
YiPinyin[644] = "wuox";	// A284
YiPinyin[645] = "wuo";	// A285
YiPinyin[646] = "wuop";	// A286
YiPinyin[647] = "wox";	// A287
YiPinyin[648] = "wo";	// A288
YiPinyin[649] = "wop";	// A289
YiPinyin[650] = "wex";	// A28A
YiPinyin[651] = "we";	// A28B
YiPinyin[652] = "wep";	// A28C
YiPinyin[653] = "zit";	// A28D
YiPinyin[654] = "zix";	// A28E
YiPinyin[655] = "zi";	// A28F
YiPinyin[656] = "zip";	// A290
YiPinyin[657] = "ziex";	// A291
YiPinyin[658] = "zie";	// A292
YiPinyin[659] = "ziep";	// A293
YiPinyin[660] = "zat";	// A294
YiPinyin[661] = "zax";	// A295
YiPinyin[662] = "za";	// A296
YiPinyin[663] = "zap";	// A297
YiPinyin[664] = "zuox";	// A298
YiPinyin[665] = "zuo";	// A299
YiPinyin[666] = "zuop";	// A29A
YiPinyin[667] = "zot";	// A29B
YiPinyin[668] = "zox";	// A29C
YiPinyin[669] = "zo";	// A29D
YiPinyin[670] = "zop";	// A29E
YiPinyin[671] = "zex";	// A29F
YiPinyin[672] = "ze";	// A2A0
YiPinyin[673] = "zep";	// A2A1
YiPinyin[674] = "zut";	// A2A2
YiPinyin[675] = "zux";	// A2A3
YiPinyin[676] = "zu";	// A2A4
YiPinyin[677] = "zup";	// A2A5
YiPinyin[678] = "zurx";	// A2A6
YiPinyin[679] = "zur";	// A2A7
YiPinyin[680] = "zyt";	// A2A8
YiPinyin[681] = "zyx";	// A2A9
YiPinyin[682] = "zy";	// A2AA
YiPinyin[683] = "zyp";	// A2AB
YiPinyin[684] = "zyrx";	// A2AC
YiPinyin[685] = "zyr";	// A2AD
YiPinyin[686] = "cit";	// A2AE
YiPinyin[687] = "cix";	// A2AF
YiPinyin[688] = "ci";	// A2B0
YiPinyin[689] = "cip";	// A2B1
YiPinyin[690] = "ciet";	// A2B2
YiPinyin[691] = "ciex";	// A2B3
YiPinyin[692] = "cie";	// A2B4
YiPinyin[693] = "ciep";	// A2B5
YiPinyin[694] = "cat";	// A2B6
YiPinyin[695] = "cax";	// A2B7
YiPinyin[696] = "ca";	// A2B8
YiPinyin[697] = "cap";	// A2B9
YiPinyin[698] = "cuox";	// A2BA
YiPinyin[699] = "cuo";	// A2BB
YiPinyin[700] = "cuop";	// A2BC
YiPinyin[701] = "cot";	// A2BD
YiPinyin[702] = "cox";	// A2BE
YiPinyin[703] = "co";	// A2BF
YiPinyin[704] = "cop";	// A2C0
YiPinyin[705] = "cex";	// A2C1
YiPinyin[706] = "ce";	// A2C2
YiPinyin[707] = "cep";	// A2C3
YiPinyin[708] = "cut";	// A2C4
YiPinyin[709] = "cux";	// A2C5
YiPinyin[710] = "cu";	// A2C6
YiPinyin[711] = "cup";	// A2C7
YiPinyin[712] = "curx";	// A2C8
YiPinyin[713] = "cur";	// A2C9
YiPinyin[714] = "cyt";	// A2CA
YiPinyin[715] = "cyx";	// A2CB
YiPinyin[716] = "cy";	// A2CC
YiPinyin[717] = "cyp";	// A2CD
YiPinyin[718] = "cyrx";	// A2CE
YiPinyin[719] = "cyr";	// A2CF
YiPinyin[720] = "zzit";	// A2D0
YiPinyin[721] = "zzix";	// A2D1
YiPinyin[722] = "zzi";	// A2D2
YiPinyin[723] = "zzip";	// A2D3
YiPinyin[724] = "zziet";	// A2D4
YiPinyin[725] = "zziex";	// A2D5
YiPinyin[726] = "zzie";	// A2D6
YiPinyin[727] = "zziep";	// A2D7
YiPinyin[728] = "zzat";	// A2D8
YiPinyin[729] = "zzax";	// A2D9
YiPinyin[730] = "zza";	// A2DA
YiPinyin[731] = "zzap";	// A2DB
YiPinyin[732] = "zzox";	// A2DC
YiPinyin[733] = "zzo";	// A2DD
YiPinyin[734] = "zzop";	// A2DE
YiPinyin[735] = "zzex";	// A2DF
YiPinyin[736] = "zze";	// A2E0
YiPinyin[737] = "zzep";	// A2E1
YiPinyin[738] = "zzux";	// A2E2
YiPinyin[739] = "zzu";	// A2E3
YiPinyin[740] = "zzup";	// A2E4
YiPinyin[741] = "zzurx";	// A2E5
YiPinyin[742] = "zzur";	// A2E6
YiPinyin[743] = "zzyt";	// A2E7
YiPinyin[744] = "zzyx";	// A2E8
YiPinyin[745] = "zzy";	// A2E9
YiPinyin[746] = "zzyp";	// A2EA
YiPinyin[747] = "zzyrx";	// A2EB
YiPinyin[748] = "zzyr";	// A2EC
YiPinyin[749] = "nzit";	// A2ED
YiPinyin[750] = "nzix";	// A2EE
YiPinyin[751] = "nzi";	// A2EF
YiPinyin[752] = "nzip";	// A2F0
YiPinyin[753] = "nziex";	// A2F1
YiPinyin[754] = "nzie";	// A2F2
YiPinyin[755] = "nziep";	// A2F3
YiPinyin[756] = "nzat";	// A2F4
YiPinyin[757] = "nzax";	// A2F5
YiPinyin[758] = "nza";	// A2F6
YiPinyin[759] = "nzap";	// A2F7
YiPinyin[760] = "nzuox";	// A2F8
YiPinyin[761] = "nzuo";	// A2F9
YiPinyin[762] = "nzox";	// A2FA
YiPinyin[763] = "nzop";	// A2FB
YiPinyin[764] = "nzex";	// A2FC
YiPinyin[765] = "nze";	// A2FD
YiPinyin[766] = "nzux";	// A2FE
YiPinyin[767] = "nzu";	// A2FF
YiPinyin[768] = "nzup";	// A300
YiPinyin[769] = "nzurx";	// A301
YiPinyin[770] = "nzur";	// A302
YiPinyin[771] = "nzyt";	// A303
YiPinyin[772] = "nzyx";	// A304
YiPinyin[773] = "nzy";	// A305
YiPinyin[774] = "nzyp";	// A306
YiPinyin[775] = "nzyrx";	// A307
YiPinyin[776] = "nzyr";	// A308
YiPinyin[777] = "sit";	// A309
YiPinyin[778] = "six";	// A30A
YiPinyin[779] = "si";	// A30B
YiPinyin[780] = "sip";	// A30C
YiPinyin[781] = "siex";	// A30D
YiPinyin[782] = "sie";	// A30E
YiPinyin[783] = "siep";	// A30F
YiPinyin[784] = "sat";	// A310
YiPinyin[785] = "sax";	// A311
YiPinyin[786] = "sa";	// A312
YiPinyin[787] = "sap";	// A313
YiPinyin[788] = "suox";	// A314
YiPinyin[789] = "suo";	// A315
YiPinyin[790] = "suop";	// A316
YiPinyin[791] = "sot";	// A317
YiPinyin[792] = "sox";	// A318
YiPinyin[793] = "so";	// A319
YiPinyin[794] = "sop";	// A31A
YiPinyin[795] = "sex";	// A31B
YiPinyin[796] = "se";	// A31C
YiPinyin[797] = "sep";	// A31D
YiPinyin[798] = "sut";	// A31E
YiPinyin[799] = "sux";	// A31F
YiPinyin[800] = "su";	// A320
YiPinyin[801] = "sup";	// A321
YiPinyin[802] = "surx";	// A322
YiPinyin[803] = "sur";	// A323
YiPinyin[804] = "syt";	// A324
YiPinyin[805] = "syx";	// A325
YiPinyin[806] = "sy";	// A326
YiPinyin[807] = "syp";	// A327
YiPinyin[808] = "syrx";	// A328
YiPinyin[809] = "syr";	// A329
YiPinyin[810] = "ssit";	// A32A
YiPinyin[811] = "ssix";	// A32B
YiPinyin[812] = "ssi";	// A32C
YiPinyin[813] = "ssip";	// A32D
YiPinyin[814] = "ssiex";	// A32E
YiPinyin[815] = "ssie";	// A32F
YiPinyin[816] = "ssiep";	// A330
YiPinyin[817] = "ssat";	// A331
YiPinyin[818] = "ssax";	// A332
YiPinyin[819] = "ssa";	// A333
YiPinyin[820] = "ssap";	// A334
YiPinyin[821] = "ssot";	// A335
YiPinyin[822] = "ssox";	// A336
YiPinyin[823] = "sso";	// A337
YiPinyin[824] = "ssop";	// A338
YiPinyin[825] = "ssex";	// A339
YiPinyin[826] = "sse";	// A33A
YiPinyin[827] = "ssep";	// A33B
YiPinyin[828] = "ssut";	// A33C
YiPinyin[829] = "ssux";	// A33D
YiPinyin[830] = "ssu";	// A33E
YiPinyin[831] = "ssup";	// A33F
YiPinyin[832] = "ssyt";	// A340
YiPinyin[833] = "ssyx";	// A341
YiPinyin[834] = "ssy";	// A342
YiPinyin[835] = "ssyp";	// A343
YiPinyin[836] = "ssyrx";	// A344
YiPinyin[837] = "ssyr";	// A345
YiPinyin[838] = "zhat";	// A346
YiPinyin[839] = "zhax";	// A347
YiPinyin[840] = "zha";	// A348
YiPinyin[841] = "zhap";	// A349
YiPinyin[842] = "zhuox";	// A34A
YiPinyin[843] = "zhuo";	// A34B
YiPinyin[844] = "zhuop";	// A34C
YiPinyin[845] = "zhot";	// A34D
YiPinyin[846] = "zhox";	// A34E
YiPinyin[847] = "zho";	// A34F
YiPinyin[848] = "zhop";	// A350
YiPinyin[849] = "zhet";	// A351
YiPinyin[850] = "zhex";	// A352
YiPinyin[851] = "zhe";	// A353
YiPinyin[852] = "zhep";	// A354
YiPinyin[853] = "zhut";	// A355
YiPinyin[854] = "zhux";	// A356
YiPinyin[855] = "zhu";	// A357
YiPinyin[856] = "zhup";	// A358
YiPinyin[857] = "zhurx";	// A359
YiPinyin[858] = "zhur";	// A35A
YiPinyin[859] = "zhyt";	// A35B
YiPinyin[860] = "zhyx";	// A35C
YiPinyin[861] = "zhy";	// A35D
YiPinyin[862] = "zhyp";	// A35E
YiPinyin[863] = "zhyrx";	// A35F
YiPinyin[864] = "zhyr";	// A360
YiPinyin[865] = "chat";	// A361
YiPinyin[866] = "chax";	// A362
YiPinyin[867] = "cha";	// A363
YiPinyin[868] = "chap";	// A364
YiPinyin[869] = "chuot";	// A365
YiPinyin[870] = "chuox";	// A366
YiPinyin[871] = "chuo";	// A367
YiPinyin[872] = "chuop";	// A368
YiPinyin[873] = "chot";	// A369
YiPinyin[874] = "chox";	// A36A
YiPinyin[875] = "cho";	// A36B
YiPinyin[876] = "chop";	// A36C
YiPinyin[877] = "chet";	// A36D
YiPinyin[878] = "chex";	// A36E
YiPinyin[879] = "che";	// A36F
YiPinyin[880] = "chep";	// A370
YiPinyin[881] = "chux";	// A371
YiPinyin[882] = "chu";	// A372
YiPinyin[883] = "chup";	// A373
YiPinyin[884] = "churx";	// A374
YiPinyin[885] = "chur";	// A375
YiPinyin[886] = "chyt";	// A376
YiPinyin[887] = "chyx";	// A377
YiPinyin[888] = "chy";	// A378
YiPinyin[889] = "chyp";	// A379
YiPinyin[890] = "chyrx";	// A37A
YiPinyin[891] = "chyr";	// A37B
YiPinyin[892] = "rrax";	// A37C
YiPinyin[893] = "rra";	// A37D
YiPinyin[894] = "rruox";	// A37E
YiPinyin[895] = "rruo";	// A37F
YiPinyin[896] = "rrot";	// A380
YiPinyin[897] = "rrox";	// A381
YiPinyin[898] = "rro";	// A382
YiPinyin[899] = "rrop";	// A383
YiPinyin[900] = "rret";	// A384
YiPinyin[901] = "rrex";	// A385
YiPinyin[902] = "rre";	// A386
YiPinyin[903] = "rrep";	// A387
YiPinyin[904] = "rrut";	// A388
YiPinyin[905] = "rrux";	// A389
YiPinyin[906] = "rru";	// A38A
YiPinyin[907] = "rrup";	// A38B
YiPinyin[908] = "rrurx";	// A38C
YiPinyin[909] = "rrur";	// A38D
YiPinyin[910] = "rryt";	// A38E
YiPinyin[911] = "rryx";	// A38F
YiPinyin[912] = "rry";	// A390
YiPinyin[913] = "rryp";	// A391
YiPinyin[914] = "rryrx";	// A392
YiPinyin[915] = "rryr";	// A393
YiPinyin[916] = "nrat";	// A394
YiPinyin[917] = "nrax";	// A395
YiPinyin[918] = "nra";	// A396
YiPinyin[919] = "nrap";	// A397
YiPinyin[920] = "nrox";	// A398
YiPinyin[921] = "nro";	// A399
YiPinyin[922] = "nrop";	// A39A
YiPinyin[923] = "nret";	// A39B
YiPinyin[924] = "nrex";	// A39C
YiPinyin[925] = "nre";	// A39D
YiPinyin[926] = "nrep";	// A39E
YiPinyin[927] = "nrut";	// A39F
YiPinyin[928] = "nrux";	// A3A0
YiPinyin[929] = "nru";	// A3A1
YiPinyin[930] = "nrup";	// A3A2
YiPinyin[931] = "nrurx";	// A3A3
YiPinyin[932] = "nrur";	// A3A4
YiPinyin[933] = "nryt";	// A3A5
YiPinyin[934] = "nryx";	// A3A6
YiPinyin[935] = "nry";	// A3A7
YiPinyin[936] = "nryp";	// A3A8
YiPinyin[937] = "nryrx";	// A3A9
YiPinyin[938] = "nryr";	// A3AA
YiPinyin[939] = "shat";	// A3AB
YiPinyin[940] = "shax";	// A3AC
YiPinyin[941] = "sha";	// A3AD
YiPinyin[942] = "shap";	// A3AE
YiPinyin[943] = "shuox";	// A3AF
YiPinyin[944] = "shuo";	// A3B0
YiPinyin[945] = "shuop";	// A3B1
YiPinyin[946] = "shot";	// A3B2
YiPinyin[947] = "shox";	// A3B3
YiPinyin[948] = "sho";	// A3B4
YiPinyin[949] = "shop";	// A3B5
YiPinyin[950] = "shet";	// A3B6
YiPinyin[951] = "shex";	// A3B7
YiPinyin[952] = "she";	// A3B8
YiPinyin[953] = "shep";	// A3B9
YiPinyin[954] = "shut";	// A3BA
YiPinyin[955] = "shux";	// A3BB
YiPinyin[956] = "shu";	// A3BC
YiPinyin[957] = "shup";	// A3BD
YiPinyin[958] = "shurx";	// A3BE
YiPinyin[959] = "shur";	// A3BF
YiPinyin[960] = "shyt";	// A3C0
YiPinyin[961] = "shyx";	// A3C1
YiPinyin[962] = "shy";	// A3C2
YiPinyin[963] = "shyp";	// A3C3
YiPinyin[964] = "shyrx";	// A3C4
YiPinyin[965] = "shyr";	// A3C5
YiPinyin[966] = "rat";	// A3C6
YiPinyin[967] = "rax";	// A3C7
YiPinyin[968] = "ra";	// A3C8
YiPinyin[969] = "rap";	// A3C9
YiPinyin[970] = "ruox";	// A3CA
YiPinyin[971] = "ruo";	// A3CB
YiPinyin[972] = "ruop";	// A3CC
YiPinyin[973] = "rot";	// A3CD
YiPinyin[974] = "rox";	// A3CE
YiPinyin[975] = "ro";	// A3CF
YiPinyin[976] = "rop";	// A3D0
YiPinyin[977] = "rex";	// A3D1
YiPinyin[978] = "re";	// A3D2
YiPinyin[979] = "rep";	// A3D3
YiPinyin[980] = "rut";	// A3D4
YiPinyin[981] = "rux";	// A3D5
YiPinyin[982] = "ru";	// A3D6
YiPinyin[983] = "rup";	// A3D7
YiPinyin[984] = "rurx";	// A3D8
YiPinyin[985] = "rur";	// A3D9
YiPinyin[986] = "ryt";	// A3DA
YiPinyin[987] = "ryx";	// A3DB
YiPinyin[988] = "ry";	// A3DC
YiPinyin[989] = "ryp";	// A3DD
YiPinyin[990] = "ryrx";	// A3DE
YiPinyin[991] = "ryr";	// A3DF
YiPinyin[992] = "jit";	// A3E0
YiPinyin[993] = "jix";	// A3E1
YiPinyin[994] = "ji";	// A3E2
YiPinyin[995] = "jip";	// A3E3
YiPinyin[996] = "jiet";	// A3E4
YiPinyin[997] = "jiex";	// A3E5
YiPinyin[998] = "jie";	// A3E6
YiPinyin[999] = "jiep";	// A3E7
YiPinyin[1000] = "juot";	// A3E8
YiPinyin[1001] = "juox";	// A3E9
YiPinyin[1002] = "juo";	// A3EA
YiPinyin[1003] = "juop";	// A3EB
YiPinyin[1004] = "jot";	// A3EC
YiPinyin[1005] = "jox";	// A3ED
YiPinyin[1006] = "jo";	// A3EE
YiPinyin[1007] = "jop";	// A3EF
YiPinyin[1008] = "jut";	// A3F0
YiPinyin[1009] = "jux";	// A3F1
YiPinyin[1010] = "ju";	// A3F2
YiPinyin[1011] = "jup";	// A3F3
YiPinyin[1012] = "jurx";	// A3F4
YiPinyin[1013] = "jur";	// A3F5
YiPinyin[1014] = "jyt";	// A3F6
YiPinyin[1015] = "jyx";	// A3F7
YiPinyin[1016] = "jy";	// A3F8
YiPinyin[1017] = "jyp";	// A3F9
YiPinyin[1018] = "jyrx";	// A3FA
YiPinyin[1019] = "jyr";	// A3FB
YiPinyin[1020] = "qit";	// A3FC
YiPinyin[1021] = "qix";	// A3FD
YiPinyin[1022] = "qi";	// A3FE
YiPinyin[1023] = "qip";	// A3FF
YiPinyin[1024] = "qiet";	// A400
YiPinyin[1025] = "qiex";	// A401
YiPinyin[1026] = "qie";	// A402
YiPinyin[1027] = "qiep";	// A403
YiPinyin[1028] = "quot";	// A404
YiPinyin[1029] = "quox";	// A405
YiPinyin[1030] = "quo";	// A406
YiPinyin[1031] = "quop";	// A407
YiPinyin[1032] = "qot";	// A408
YiPinyin[1033] = "qox";	// A409
YiPinyin[1034] = "qo";	// A40A
YiPinyin[1035] = "qop";	// A40B
YiPinyin[1036] = "qut";	// A40C
YiPinyin[1037] = "qux";	// A40D
YiPinyin[1038] = "qu";	// A40E
YiPinyin[1039] = "qup";	// A40F
YiPinyin[1040] = "qurx";	// A410
YiPinyin[1041] = "qur";	// A411
YiPinyin[1042] = "qyt";	// A412
YiPinyin[1043] = "qyx";	// A413
YiPinyin[1044] = "qy";	// A414
YiPinyin[1045] = "qyp";	// A415
YiPinyin[1046] = "qyrx";	// A416
YiPinyin[1047] = "qyr";	// A417
YiPinyin[1048] = "jjit";	// A418
YiPinyin[1049] = "jjix";	// A419
YiPinyin[1050] = "jji";	// A41A
YiPinyin[1051] = "jjip";	// A41B
YiPinyin[1052] = "jjiet";	// A41C
YiPinyin[1053] = "jjiex";	// A41D
YiPinyin[1054] = "jjie";	// A41E
YiPinyin[1055] = "jjiep";	// A41F
YiPinyin[1056] = "jjuox";	// A420
YiPinyin[1057] = "jjuo";	// A421
YiPinyin[1058] = "jjuop";	// A422
YiPinyin[1059] = "jjot";	// A423
YiPinyin[1060] = "jjox";	// A424
YiPinyin[1061] = "jjo";	// A425
YiPinyin[1062] = "jjop";	// A426
YiPinyin[1063] = "jjut";	// A427
YiPinyin[1064] = "jjux";	// A428
YiPinyin[1065] = "jju";	// A429
YiPinyin[1066] = "jjup";	// A42A
YiPinyin[1067] = "jjurx";	// A42B
YiPinyin[1068] = "jjur";	// A42C
YiPinyin[1069] = "jjyt";	// A42D
YiPinyin[1070] = "jjyx";	// A42E
YiPinyin[1071] = "jjy";	// A42F
YiPinyin[1072] = "jjyp";	// A430
YiPinyin[1073] = "njit";	// A431
YiPinyin[1074] = "njix";	// A432
YiPinyin[1075] = "nji";	// A433
YiPinyin[1076] = "njip";	// A434
YiPinyin[1077] = "njiet";	// A435
YiPinyin[1078] = "njiex";	// A436
YiPinyin[1079] = "njie";	// A437
YiPinyin[1080] = "njiep";	// A438
YiPinyin[1081] = "njuox";	// A439
YiPinyin[1082] = "njuo";	// A43A
YiPinyin[1083] = "njot";	// A43B
YiPinyin[1084] = "njox";	// A43C
YiPinyin[1085] = "njo";	// A43D
YiPinyin[1086] = "njop";	// A43E
YiPinyin[1087] = "njux";	// A43F
YiPinyin[1088] = "nju";	// A440
YiPinyin[1089] = "njup";	// A441
YiPinyin[1090] = "njurx";	// A442
YiPinyin[1091] = "njur";	// A443
YiPinyin[1092] = "njyt";	// A444
YiPinyin[1093] = "njyx";	// A445
YiPinyin[1094] = "njy";	// A446
YiPinyin[1095] = "njyp";	// A447
YiPinyin[1096] = "njyrx";	// A448
YiPinyin[1097] = "njyr";	// A449
YiPinyin[1098] = "nyit";	// A44A
YiPinyin[1099] = "nyix";	// A44B
YiPinyin[1100] = "nyi";	// A44C
YiPinyin[1101] = "nyip";	// A44D
YiPinyin[1102] = "nyiet";	// A44E
YiPinyin[1103] = "nyiex";	// A44F
YiPinyin[1104] = "nyie";	// A450
YiPinyin[1105] = "nyiep";	// A451
YiPinyin[1106] = "nyuox";	// A452
YiPinyin[1107] = "nyuo";	// A453
YiPinyin[1108] = "nyuop";	// A454
YiPinyin[1109] = "nyot";	// A455
YiPinyin[1110] = "nyox";	// A456
YiPinyin[1111] = "nyo";	// A457
YiPinyin[1112] = "nyop";	// A458
YiPinyin[1113] = "nyut";	// A459
YiPinyin[1114] = "nyux";	// A45A
YiPinyin[1115] = "nyu";	// A45B
YiPinyin[1116] = "nyup";	// A45C
YiPinyin[1117] = "xit";	// A45D
YiPinyin[1118] = "xix";	// A45E
YiPinyin[1119] = "xi";	// A45F
YiPinyin[1120] = "xip";	// A460
YiPinyin[1121] = "xiet";	// A461
YiPinyin[1122] = "xiex";	// A462
YiPinyin[1123] = "xie";	// A463
YiPinyin[1124] = "xiep";	// A464
YiPinyin[1125] = "xuox";	// A465
YiPinyin[1126] = "xuo";	// A466
YiPinyin[1127] = "xot";	// A467
YiPinyin[1128] = "xox";	// A468
YiPinyin[1129] = "xo";	// A469
YiPinyin[1130] = "xop";	// A46A
YiPinyin[1131] = "xyt";	// A46B
YiPinyin[1132] = "xyx";	// A46C
YiPinyin[1133] = "xy";	// A46D
YiPinyin[1134] = "xyp";	// A46E
YiPinyin[1135] = "xyrx";	// A46F
YiPinyin[1136] = "xyr";	// A470
YiPinyin[1137] = "yit";	// A471
YiPinyin[1138] = "yix";	// A472
YiPinyin[1139] = "yi";	// A473
YiPinyin[1140] = "yip";	// A474
YiPinyin[1141] = "yiet";	// A475
YiPinyin[1142] = "yiex";	// A476
YiPinyin[1143] = "yie";	// A477
YiPinyin[1144] = "yiep";	// A478
YiPinyin[1145] = "yuot";	// A479
YiPinyin[1146] = "yuox";	// A47A
YiPinyin[1147] = "yuo";	// A47B
YiPinyin[1148] = "yuop";	// A47C
YiPinyin[1149] = "yot";	// A47D
YiPinyin[1150] = "yox";	// A47E
YiPinyin[1151] = "yo";	// A47F
YiPinyin[1152] = "yop";	// A480
YiPinyin[1153] = "yut";	// A481
YiPinyin[1154] = "yux";	// A482
YiPinyin[1155] = "yu";	// A483
YiPinyin[1156] = "yup";	// A484
YiPinyin[1157] = "yurx";	// A485
YiPinyin[1158] = "yur";	// A486
YiPinyin[1159] = "yyt";	// A487
YiPinyin[1160] = "yyx";	// A488
YiPinyin[1161] = "yy";	// A489
YiPinyin[1162] = "yyp";	// A48A
YiPinyin[1163] = "yyrx";	// A48B
YiPinyin[1164] = "yyr";	// A48C
YiPinyin[1165] = "";	// End of Array

function OnConvertToPinyin()
{
	var editBoxIn = document.getElementById( "edittextsyllables" );
	var editBoxOut = document.getElementById( "edittextpinyin" );

	editBoxOut.value = ToYiPinyin( editBoxIn.value );
}

function OnConvertToSyllables()
{
	var editBoxIn = document.getElementById( "edittextpinyin" );
	var editBoxOut = document.getElementById( "edittextsyllables" );

	editBoxOut.value = ToYiSyllables( editBoxIn.value );
}

function ToYiPinyin( input )
{
	var output = "";
	var prevCharWasSyllable = false;
	var thisCharIsSyllable = false;

	for ( var i = 0; i < input.length; i++ )
	{
		var char = input.charAt( i );
		var cp = input.charCodeAt( i );
		var pinyin = "";
		thisCharIsSyllable = false;

		if ( ( cp >= YiSyllableFirst )  && ( cp <= YiSyllableLast ) )
		{
			if ( prevCharWasSyllable == true )
			{
				pinyin = " ";
			}
			var p = cp-YiSyllableFirst;
			pinyin += YiPinyin[cp-YiSyllableFirst];
			thisCharIsSyllable = true;
		}
		else
		{
			switch ( cp )
			{
			case ( 0x3000 ) :		// IDEOGRAPHIC SPACE
				char = " ";
				break;

			case ( 0x3001 ) :		// IDEOGRAPHIC COMMA
				char = ", ";
				break;

			case ( 0x3002 ) :		// IDEOGRAPHIC FULL STOP
				char = ".";
				break;

			case ( 0x3008 ) :		// LEFT ANGLE BRACKET
				char = "<";
				break;

			case ( 0x3009 ) :		// RIGHT ANGLE BRACKET
				char = ">";
				break;

			case ( 0x300A ) :		// LEFT ANGLE BRACKET
				char = "«";
				break;

			case ( 0x300B ) :		// RIGHT ANGLE BRACKET
				char = "»";
				break;

			default :
				// Convert fullwidth to ordinary
				if ( ( cp > 0xFF00 ) && ( cp < 0xFF5F ) )
				{
					cp -= 0xFEE0;
					char = String.fromCharCode( cp );
				}
				break;
			}

			pinyin = char;
		}

		output += pinyin;
		prevCharWasSyllable = thisCharIsSyllable;
	}

	return output;
}

function ToYiSyllables( input )
{
	var output = "";
	var buffer1 = "";		// Original non-casefolded text
	var buffer2 = "";		// Casefolded text
	var bufferLength = 0;
	var arrayIndex = -1;
	var converted = false;
	var space = false;

	for ( var i = 0; i < input.length; i++ )
	{
		var char1 = input.charAt( i );
		var char2 = char1.toLowerCase();

		if ( ( char2 >= "a" ) && ( char2 <= "z" ) )
		{
			if ( arrayIndex == -1 )
			{
				buffer1 = char1;
				buffer2 = char2;
				bufferLength = 1;
				arrayIndex = FindSyllable( buffer2, bufferLength );
			}
			else
			{
				var index = FindSyllable( ( buffer2 + char2 ), ( bufferLength + 1 ) );

				if ( index == -1 )
				{
					var syllable = GetSyllable( buffer2, bufferLength, arrayIndex );

					if ( syllable == "" )
					{
						if ( space == true )
						{
							output += " ";
						}
						output += buffer1;
						converted = false;
					}
					else
					{
						output += syllable;
						converted = true;
					}
					space = false;

					buffer1 = char1;
					buffer2 = char2;
					bufferLength = 1;
					arrayIndex = FindSyllable( buffer2, bufferLength );
				}
				else
				{
					buffer1 += char1;
					buffer2 += char2;
					bufferLength++;
					arrayIndex = index;

					if ( bufferLength == 5 )
					{
						output += GetSyllable( buffer2, bufferLength, arrayIndex );
						converted = true;
						space = false;
						buffer1 = "";
						buffer2 = "";
						bufferLength = 0;
					}
				}
			}
		}
		else
		{
			if ( bufferLength > 0 )
			{
				var syllable = GetSyllable( buffer2, bufferLength, arrayIndex );

				if ( syllable == "" )
				{
					if ( space == true )
					{
						output += " ";
					}
					output += buffer1;
					converted =  false;
				}
				else
				{
					output += syllable;
					converted = true;
				}
				space = false;

				buffer1 = "";
				buffer2 = "";
				bufferLength = 0;
			}

			if ( ( converted == true ) && ( char1 == " " ) )
			{
				space = true;
			}
			else
			{
				output += char1;
				space = false;
			}

			converted = false;
		}
	}

	if ( bufferLength > 0 )
	{
		var syllable = GetSyllable( buffer2, bufferLength, arrayIndex );

		if ( syllable == "" )
		{
			if ( space == true )
			{
				output += " ";
			}
			output += buffer1;
		}
		else
		{
			output += syllable;
		}
	}

	return output;
}

function FindSyllable( buffer, bufferLength )
{
	for ( var i = 0; i < YiSyllables; i++ )
	{
		if ( YiPinyin[i].length >= bufferLength )
		{
			var match = true;

			for ( var j = 0; j < bufferLength; j++ )
			{
				if ( YiPinyin[i].charAt( j ) != buffer.charAt( j ) )
				{
					match = false;
					break;
				}
			}

			if ( match == true )
			{
				return i;
			}
		}
	}

	return -1;
}

function GetSyllable( buffer, bufferLength, index )
{
	for ( var i = index; YiPinyin[i].charAt( 0 ) == buffer.charAt( 0 ); i++ )
	{
		if ( YiPinyin[i] == buffer )
		{
			return String.fromCharCode( YiSyllableFirst + i );
		}
	}

	return "";
}
