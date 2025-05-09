import { IsString, IsNumber } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  manager: string;

  @IsNumber()
  salePrice: number;

  @IsString()
  razonSocial: string;

  @IsString()
  rfc: string;

  @IsString()
  regimenFiscal: string;

  @IsString()
  codigoPostal: string;

  @IsString()
  usoCfdi: string;

  @IsNumber()
  clientId: number;
}
