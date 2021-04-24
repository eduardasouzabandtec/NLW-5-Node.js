import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619060995803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        //pode ser null
                        isNullable: true
                    },
                    {  
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "text",
                        type: "varchar"
                    },
                    {   
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        //o mesmo nome da tabela
                        referencedTableName: "users",
                        //coluna da tabela users que vou referenciar
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        // oq fazer quando o id da tabela user for removida ex: remover, não permitir, setar como null
                        onDelete: "SET NULL",
                        //quando for atualizado
                        onUpdate: "SET NULL",

                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropTable("messages")
    }

}
