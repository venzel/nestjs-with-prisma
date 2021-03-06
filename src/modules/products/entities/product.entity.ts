import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Product, Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';

export class ProductEntity implements Product {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional({ nullable: true })
    description: string;

    @Transform(({ value }) => value.toNumber())
    @ApiProperty({ type: Number })
    price: Prisma.Decimal;

    @ApiProperty()
    sku: string;

    @ApiPropertyOptional({ default: false })
    published: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial);
    }
}
