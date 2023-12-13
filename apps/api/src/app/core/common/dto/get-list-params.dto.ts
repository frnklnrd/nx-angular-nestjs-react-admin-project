import { ApiProperty } from '@nestjs/swagger';

export class GetListParamsDto {
  @ApiProperty()
  pagination: { page: number; perPage: number };

  @ApiProperty()
  sort: { field: string; order: 'ASC' | 'DESC' };

  @ApiProperty()
  filter: any;

  @ApiProperty()
  meta?: any;

  @ApiProperty()
  range: string;
}
