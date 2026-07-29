import {supabase} from '../supabaseClient';

const EVENT_SELECT = 'id, start_date, meal_plan_id';

const toEvent = row => ({
  id: row.id,
  startDate: row.start_date,
  mealplanId: row.meal_plan_id,
});

const GetEvents = async () => {
  const {data, error} = await supabase
    .from('events')
    .select(EVENT_SELECT)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toEvent);
};

const GetEventById = async id => {
  const {data, error} = await supabase
    .from('events')
    .select(EVENT_SELECT)
    .eq('id', id)
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toEvent(data);
};

const CreateEvent = async (startDate, mealplanId) => {
  const {data, error} = await supabase
    .from('events')
    .insert({start_date: startDate, meal_plan_id: mealplanId})
    .select()
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toEvent(data);
};

const UpdateEvent = async (startDate, mealplanId, id) => {
  const {data, error} = await supabase
    .from('events')
    .update({start_date: startDate, meal_plan_id: mealplanId})
    .eq('id', id)
    .select()
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toEvent(data);
};

const DeleteEvent = async id => {
  const {error} = await supabase.from('events').delete().eq('id', id);
  if (error) {
    console.log(error);
  }
};

export {GetEvents, GetEventById, CreateEvent, UpdateEvent, DeleteEvent};
