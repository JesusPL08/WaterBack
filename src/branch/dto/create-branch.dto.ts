import { IsString, IsNumber, IsPositive,IsOptional } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  coordinate: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  manager: string;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  salePrice: number;

  @IsString()
  @IsOptional()
  razonSocial: string;

  @IsString()
  @IsOptional()
  rfc: string;

  @IsString()
  @IsOptional()
  regimenFiscal: string;

  @IsString()
  @IsOptional()
  codigoPostal: string;

  @IsString()
  @IsOptional()
  usoCfdi: string;

  @IsNumber()
  @IsPositive()
  clientId: number;
}
