import Identifier from "./identifier";

export class Entity<P>{

    private id:Identifier;
    protected props: P;
    private CreatedAt: Date;
    private UpdatedAt?: Date;
    private EntityState: boolean

     constructor(props: P, id?: string) {
        this.id =  Identifier.create(id);
        this.props = props;
        this.CreatedAt = new Date();
        this.EntityState = true;
    }

    public get Id(): string {
        return this.id.valueToString;
    }

    public get createdAt(): Date {
        return this.CreatedAt;
    }

    public get updatedAt(): Date| undefined {
        return this.UpdatedAt;
    }

    public get entityState(): boolean {
        return this.EntityState;
    }

    protected update(){
        this.UpdatedAt = new Date();
    }

    protected changeEntityState(state: boolean){
        this.EntityState = state;
    }


}