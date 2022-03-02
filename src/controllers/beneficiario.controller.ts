import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Beneficiario} from '../models';
import {BeneficiarioRepository} from '../repositories';

export class BeneficiarioController {
  constructor(
    @repository(BeneficiarioRepository)
    public beneficiarioRepository : BeneficiarioRepository,
  ) {}

  @post('/beneficiarios')
  @response(200, {
    description: 'Beneficiario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Beneficiario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Beneficiario, {
            title: 'NewBeneficiario',
            exclude: ['id'],
          }),
        },
      },
    })
    beneficiario: Omit<Beneficiario, 'id'>,
  ): Promise<Beneficiario> {
    return this.beneficiarioRepository.create(beneficiario);
  }

  @get('/beneficiarios/count')
  @response(200, {
    description: 'Beneficiario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Beneficiario) where?: Where<Beneficiario>,
  ): Promise<Count> {
    return this.beneficiarioRepository.count(where);
  }

  @get('/beneficiarios')
  @response(200, {
    description: 'Array of Beneficiario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Beneficiario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Beneficiario) filter?: Filter<Beneficiario>,
  ): Promise<Beneficiario[]> {
    
    return this.beneficiarioRepository.find(filter);
  } 

  @patch('/beneficiarios')
  @response(200, {
    description: 'Beneficiario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Beneficiario, {partial: true}),
        },
      },
    })
    beneficiario: Beneficiario,
    @param.where(Beneficiario) where?: Where<Beneficiario>,
  ): Promise<Count> {
    return this.beneficiarioRepository.updateAll(beneficiario, where);
  }

  @get('/beneficiarios/{id}')
  @response(200, {
    description: 'Beneficiario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Beneficiario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Beneficiario, {exclude: 'where'}) filter?: FilterExcludingWhere<Beneficiario>
  ): Promise<Beneficiario> {
    return this.beneficiarioRepository.findById(id, filter);
  }

  @patch('/beneficiarios/{id}')
  @response(204, {
    description: 'Beneficiario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Beneficiario, {partial: true}),
        },
      },
    })
    beneficiario: Beneficiario,
  ): Promise<void> {
    await this.beneficiarioRepository.updateById(id, beneficiario);
  }

  @put('/beneficiarios/{id}')
  @response(204, {
    description: 'Beneficiario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() beneficiario: Beneficiario,
  ): Promise<void> {
    await this.beneficiarioRepository.replaceById(id, beneficiario);
  }

  @del('/beneficiarios/{id}')
  @response(204, {
    description: 'Beneficiario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.beneficiarioRepository.deleteById(id);
  }
}
