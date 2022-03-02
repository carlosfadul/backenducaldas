import {Entity, model, property} from '@loopback/repository';

@model()
export class Beneficiario extends Entity {
  
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  documentoIgual: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaNac: string;

  @property({
    type: 'string',
    required: true,
  })
  mayor15: string;

  @property({
    type: 'string',
    required: true,
  })
  colombiano: string;

  @property({
    type: 'string',
    required: true,
  })
  bachiller: string;

  @property({
    type: 'string',
    required: true,
  })
  cumpleReq: string;

  @property({
    type: 'string',
    required: true,
  })
  revisor: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;


  constructor(data?: Partial<Beneficiario>) {
    super(data);
  }
}

export interface BeneficiarioRelations {
  // describe navigational properties here
}

export type BeneficiarioWithRelations = Beneficiario & BeneficiarioRelations;
