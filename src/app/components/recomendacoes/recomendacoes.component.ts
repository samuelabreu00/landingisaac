import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-recomendacoes',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecomendacoesComponent {

  screenWidth: number = 0;

  // Injeção do PLATFORM_ID para verificar o ambiente
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica se está no navegador e define a largura da tela
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
    }
  }

  listPropostas = [
    {
      title: 'ACESSIBILIDADE',
      description: 'Nossa gestão tem como compromisso apoiar as famílias de pessoas com deficiência (PCDs), autismo, e outros transtornos, implementando acessibilidade, com a construção de calçadas acesíveis com rampas em prédios públicos e a adtação de transporte público.',
    },
    {
      title: 'SAÚDE',
      description: 'Ampliação e reforma do hospital. Construção de uma nova UPA no distrito ideal para atender toda a região próxima. Garantir atendimento emergencial 24hrs e medicamentos. Atendimento especializado. Cadastro e entrega domiciliar de medicamentos.',
    },
    {
      title: 'AGRONOMIA E AGRICULTURA',
      description: 'Incentivo ao desenvolvimento dos agricultores, com acesso a novas máquinas para melhorar a produtividade em atividades agrícolas. Fortalecer a entrega de sementes e mudas. Cadastro e aumento adequado de hora de trator de acordo com a necessidade de cada agricultor.',
    },
    {
      title: 'CULTURA, LAZER E ESPORTE',
      description: 'Modernizar as quadras nas escolas e permitir seu uso comunitário nos finais de semana, em parceria com a Secretaria do Esporte. Incetivar a prática de diversas modalidades esportivas no Município. Promover espaços de lazer e prática de esportes para nosso povo.',
    },
    {
      title: 'INFRAESTRUTURA',
      description: 'Assegurar o abastecimento de água potável para todas as localidades e distritos de Aracoiaba. Melhorar e reformar as estradas, garantindo mais segurança e mobilidade para os cidadãos. Oficinas industriais de confecção e produção têxtil. Desenvolver oportunidades de entretenimento e convivência em diversas localidades.',
    },
    {
      title: 'EDUCAÇÃO',
      description: 'Distribuição gratuita de fardamento completo, incluindo mochila, sapato e material escolar. Merenda escolar de qualidade, com alimentação nutritiva e variada. Valorização da categoria com garantia de um teto salarial justo e digno. Formação contínua e qualificação especializada para professores e auxiliares.',
    },
  ]

  breakpoints = {
    1400: { slidesPerView: 3 },
    1000: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
    400: { slidesPerView: 1 },
    350: { slidesPerView: 1 },
    200: { slidesPerView: 1 }
  };
}
