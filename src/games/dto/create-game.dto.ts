/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Zelda',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Capa do Jogo',
    example:
      'https://upload.wikimedia.org/wikipedia/pt/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo maravilhoso',
  })
  description: string;

  @ApiProperty({
    description: 'Ano de lançamento',
    example: 1993,
  })
  year: number;

  @ApiProperty({
    description: 'Pontuação do jogo no IMB',
    example: 5,
  })
  imbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: 'https://www.youtube.com/watch?v=eaW0tYpxyp0',
  })
  trailerYoutubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Gameplay',
    example: 'https://www.youtube.com/watch?v=Z6hjG6MCcZ8',
  })
  gameplayYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'RPG'
  })
  genreGame?: string;
}
