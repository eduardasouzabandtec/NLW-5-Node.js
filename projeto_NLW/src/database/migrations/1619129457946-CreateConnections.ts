import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnections1619129457946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "connections",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "socket_id",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
                
            })
        );
        // outra forma  de criar FK
        await queryRunner.createForeignKey(
            "connections",
            new TableForeignKey({
                name: "FKConnections",
                //o mesmo nome da tabela
                referencedTableName: "users",
                //coluna da tabela users que vou referenciar
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                // oq fazer quando o id da tabela user for removida ex: remover, não permitir, setar como null
                onDelete: "SET NULL",
                //quando for atualizado
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //drop da FK
        await queryRunner.dropForeignKey("connections", "FKConnections") 
        await queryRunner.dropTable("connections");
    }

}
