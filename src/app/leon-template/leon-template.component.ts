import { Component, OnInit } from '@angular/core';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leon-template',
  templateUrl: './leon-template.component.html',
  styleUrls: ['./leon-template.component.scss'],
})
export class LeonTemplateComponent implements OnInit {
  logo: string = '../../assets/images/leon-template/logo.png';

  services: string = '../../assets/images/leon-template/services.jpg';
  // font-awesome Icons for Features
  wandMagicSparkles = faWandMagicSparkles;
  gem = faGem;
  globeAsia = faGlobeAsia;
  
  // font-awesome Icons for Services
  
  palette = faPalette;
  sketch = faSketch;
  vectorSquare = faVectorSquare;
  penRuler = faPenRuler;

  constructor() {}

  ngOnInit(): void {}
}
